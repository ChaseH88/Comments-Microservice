import React, { FC, useState, useEffect } from 'react';
import { useAxios } from '../hooks/useAxios';
import config from '../../public/ports.json';

interface CommentListInterface {
  postId: string
}

const CommentList: FC<CommentListInterface> = ({ postId }): JSX.Element => {

  const [ comments, setComments ] = useState<{[key: string]: any}>([]);

  const fetchPost = async (): Promise<any> => {

    const { data } = await useAxios(
      `http://localhost:${config.ports.comments}/post/${postId}/comments`,
    );

    setComments(data);

  }

  useEffect(() => {
    fetchPost();
  }, []);

  const renderComments = (): JSX.Element => (
    <ul>
      {comments?.map(({ id, content }: { id: string, content: string }) => (
        <li key={id}>{content}</li>
      ))}
    </ul>
  );

  return(
    <>
      <h2>Post</h2>
      {comments?.length && renderComments()}
    </>
  )
}

export { CommentList }
