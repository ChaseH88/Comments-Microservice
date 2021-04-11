import React, { FC, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import config from '../../public/config.json';

const PostCreate: FC = (): JSX.Element => {

  const [ title, setData ] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => (
    setData(e.target.value)
  );

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await useAxios(
      `http://localhost:${config.ports.posts}${config.routes.post}`,
      'post',
      { title }
    );

    setData('');
  }

  return(
    <>
      <h2>Create Post</h2>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <button className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export { PostCreate }
