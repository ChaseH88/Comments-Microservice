import React, { FC } from 'react';
import ReactDOM from 'react-dom';

// Components
import { PostCreate } from './components';

const App: FC = (): JSX.Element => {

  return(
    <div>
      <PostCreate />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'));
