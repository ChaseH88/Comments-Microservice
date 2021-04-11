import React, { FC, useState, useEffect, lazy, Suspense } from 'react';
import { useAxios } from '../hooks/useAxios';
import config from '../../public/config.json';

// Code split
const CommentList = lazy(() => import('./CommentList')
    .then(({ CommentList }) => ({ default: CommentList }))
);
const CreateComment = lazy(() => import('./CreateComment')
    .then(({ CreateComment }) => ({ default: CreateComment })),
);

const PostList: FC = (): JSX.Element => {

  const [ post, setPost ] = useState<{[key: string]: any}>({});

  const fetchPost = async (): Promise<any> => {

    const { data } = await useAxios(
      `http://localhost:${config.ports.posts}${config.routes.post}`,
    );
    setPost(data);

  }

  useEffect(() => {
    fetchPost();
  }, []);

  const renderPost = (): JSX.Element[] => (
    Object.entries(post).map(([a, { title }]) => (
      <div
        key={a}
        className={'card'}
        style={{
          width: '30%',
          margin: '0 0 20px'
        }}
      >
        <div className="card-body">
          <h3>
            {title}
          </h3>
          <Suspense fallback={<div>Loading...</div>}>
            <CommentList postId={a} />
            <CreateComment postId={a} />
          </Suspense>
        </div>
      </div>
    ))
  )

  return(
    <>
      <h2>Post</h2>
      {post && renderPost()}
    </>
  )
}

export { PostList }
