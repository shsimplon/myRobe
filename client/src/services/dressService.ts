import { dress } from 'types/dress';
import http from './config';

export const getAll = async () => {
  return await http.get('/dress');
};
export const postDress = async (data: dress) => {
  const response = await http.post('/dress', data);
  console.log('response', response);
};
