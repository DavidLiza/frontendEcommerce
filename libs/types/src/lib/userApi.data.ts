const apiUrl: string = process.env.NX_API_URL as string;

// src/api/endpoints.ts
export const userApi = {
  login: `${apiUrl}/user/login`,
  logout: `${apiUrl}/user/logout`,
  order: `${apiUrl}/user/order`,
};

export type UserApi = typeof userApi;