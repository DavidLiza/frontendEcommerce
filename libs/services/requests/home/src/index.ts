import { HOMEAPI } from '@link-tic/types'
// import axios from 'axios';

const POST_INIT_OPTIONS = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
};

const catType = 1;
export const getHomeRecommender = ( userId : string ) =>
  fetch( HOMEAPI.homerecommender , {
    ...POST_INIT_OPTIONS,
    body: JSON.stringify({ userId }),
});
