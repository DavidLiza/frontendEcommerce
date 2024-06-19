// const apiUrl: string = process.env.NX_API_URL as string;
const apiUrl = "http://localhost:8896";

// src/api/endpoints.ts
export const USERAPI = {
  login: `${apiUrl}/user/login`,
  logout: `${apiUrl}/user/logout`,
  order: `${apiUrl}/user/order`,
};

export type USERAPI = typeof USERAPI;