import React, { FC, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import config from '../../public/ports.json';

interface CreateCommentInterface {
  postId: string
}

const CreateComment: FC<CreateCommentInterface> = ({ postId }): JSX.Element => {

  const [ content, setContent ] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => (
    setContent(e.target.value)
  );

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await useAxios(
      `http://localhost:${config.ports.comments}/posts/${postId}/comments`,
      'post',
      { content }
    );

    setContent('');
  }

  return(
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="">New Comment</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <button className="btn btn-primary">
              Add Comment
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export { CreateComment }
