import axios from 'axios';

const useAxios = async (
  path: string,
  method: 'get' | 'post' = 'get',
  data: { [key: string]: any } = {}
) => (
  //@ts-ignore <-- no error here just weird ts info in terminal
  await axios[method](path, data)
);

export { useAxios };
