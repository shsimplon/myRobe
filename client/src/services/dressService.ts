import { dress } from 'types/dress';
import http from './config';

export const getAll = async () => {
  return await http.get('/dress');
};
export const postDress = async (data: dress) => {
  return await http.post('/dress', data);
};
export const updateDress = async (data: dress) => {
  return await http.put('/dress', data);
};
export const deleteDress = async (data: dress, id: string) => {
  console.log('datazzzzz', data);

  return await http.delete('/dress/' + id, { data });
};
