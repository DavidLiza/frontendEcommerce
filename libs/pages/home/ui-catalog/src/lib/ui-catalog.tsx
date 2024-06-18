import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getHomeRecommender } from '@link-tic/services/requests/home';
import {
  Button,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  styled,
  CircularProgress ,
} from '@mui/material';
import { HOMEAPI } from '@link-tic/types'

export const StyledCatalogContainer = styled(Box)(({ theme }) => ({
  marginTop: 80,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(4),
}));

export const StyledProductCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
}));

export const StyledCardMedia = styled(CardMedia)({
  height: 140,
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: 'center',
}));

export const StyledProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const StyledOrderButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

export function UiCatalog({ userId } : any) {
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await getHomeRecommender(userId);
        const response = await axios.post(HOMEAPI.homerecommender, 
          {}, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        console.log ("  FETCHING  SERVICE   ")
        // const response = {
        //   data: [
        //     {
        //       id: "123456" ,
        //       imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPz9RlMyKdIlFhN11RXDnjl1Wj_bv0mRu6rw&s" ,
        //       description: "This is the description Of Product A",
        //       name : "Producto A"
        //     },
        //     {
        //       id: "789012" ,
        //       imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8KaHxKE41sR2UKx9opvPepFhDFRdVL39TA&s" ,
        //       description: "This is the description Of Product B",
        //       name : "Producto B"
        //     },
        //   ]
        // }

        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  
  const handleOrder = async (productId: string , userId: string) => {
    try {
      if (!userId) {
        navigate('/login');
        return;
      }
      const response = await axios.post('localhost:8896/order', {
        userId,
        productId,
      });

      console.log('Order successful:', response.data);
    } catch (err) {
      console.error('Order failed', err);
    }
  };

  if (loading) {
    return (
      <StyledCatalogContainer>
        <CircularProgress />
      </StyledCatalogContainer>
    );
  }

  if (error) {
    return (
      <StyledCatalogContainer>
        <Typography color="error">{error}</Typography>
      </StyledCatalogContainer>
    );
  }

  return (
    <StyledCatalogContainer>
      {products.map((product) => (
        <StyledProductCard key={product.id}>
          <StyledCardMedia
            image={product.imageUrl}
            title={product.name}
          />
          <StyledCardContent>
            <StyledProductTitle variant="h6">{product.name}</StyledProductTitle>
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
            <StyledOrderButton
              variant="contained"
              onClick={() => handleOrder(product.id , userId)}
            >
              Order
            </StyledOrderButton>
          </StyledCardContent>
        </StyledProductCard>
      ))}
    </StyledCatalogContainer>
  );
}

export default UiCatalog;
