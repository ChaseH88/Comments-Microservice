import axios from 'axios';

const useAxios = async (
  path: string,
  method: 'get' | 'post' = 'get',
  data: { [key: string]: any } = {}
) => (
  await axios[method](path, data)
);

export { useAxios };
