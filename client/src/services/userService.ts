import { user } from 'types/user';
import http from './config';
import { userComplete } from '../types/user';

export const signIn = async (
  user: Omit<user, 'refreshToken' | 'id'>,
): Promise<any> => {
  return await http.post('/user/login', user);
};
export const getAllUsers = async (): Promise<any> => {
  return await http.get('/user');
};

export const isAuth = async () => {
  return await http.get('/user/auth/refresh');
};

export const logout = async () => {
  return await http.get('/user/logout');
};
export const signUp = async (user: any): Promise<any> => {
  console.log('signup', user);

  return await http.post('/user', user);
};
