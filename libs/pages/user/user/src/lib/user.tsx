import styled from 'styled-components';

const StyledUser = styled.div`
  color: pink;
`;

export function User() {
  return (
    <StyledUser>
      <h1>Welcome to User!</h1>
    </StyledUser>
  );
}

export default User;
