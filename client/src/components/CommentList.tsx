import React, { FC } from 'react';
import config from '../../public/config.json';

interface CommentListInterface {
  comments: Comment[]
}

interface Comment {
  id: string,
  content: string,
  status: string
}

const CommentList: FC<CommentListInterface> = ({ comments }): JSX.Element => {

  const { commentStatus: { approved, rejected, pending } } = config;

  /**
   * Handle the comment's status
   */
  const handleStatus = ({ content, status }: Comment) => {
    return (() => {
      switch (status) {
        case approved: return content;
        case pending: return 'Comment is currently under review.';
        case rejected: return 'This comment has been blocked.';
        default: return '';
      }
    })();
  }

  const renderComments = (): JSX.Element => (
    <ul>
      {comments?.map((comment: Comment) => (
        <li key={comment.id} className={comment.status}>
          {handleStatus(comment)}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <h2>Post</h2>
      {!!comments?.length && renderComments()}
    </>
  )
}

export { CommentList }
