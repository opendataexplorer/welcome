import logo from './logo.svg';
import './App.css';
/* eslint-disable import/no-webpack-loader-syntax */
import JoinUs from '!babel-loader!mdx-loader!./pages/join-us.mdx'

function App() {
  return (
    <div className="App">
      <JoinUs />
    </div>
  );
}

export default App;
