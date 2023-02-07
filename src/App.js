import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store.js';
import RootRouter from './rootRouter';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RootRouter />
      </Router>
    </Provider>
  );
}

export default App;
