import React, { FC } from 'react';

interface CommentListInterface {
  comments: any
}

const CommentList: FC<CommentListInterface> = ({ comments }): JSX.Element => {

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
      {!!comments?.length && renderComments()}
    </>
  )
}

export { CommentList }
