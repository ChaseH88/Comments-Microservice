import React, { FC } from 'react';
import ReactDOM from 'react-dom';

// Components
import {
  PostCreate,
  PostList
} from './components';

const App: FC = (): JSX.Element => {

  return(
    <div>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'));
