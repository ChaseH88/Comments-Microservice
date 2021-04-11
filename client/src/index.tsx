import React, { FC } from 'react';
import ReactDOM from 'react-dom';

// Components
import {
  PostCreate,
  PostList
} from './components';

const App: FC = (): JSX.Element => {

  return(
    <div
      className="container"
      style={{
        margin: '30px 10px',
        padding: '20px',
        background: 'rgb(251 251 251 / 15%)',
        boxShadow: 'rgb(37 37 37 / 62%) 1px 1px 9px -2px',
        border: 'rgb(251 251 251 / 15%)',
        borderRadius: '5px'
      }}
    >
      <PostCreate />
      <hr />
      <PostList />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'));
