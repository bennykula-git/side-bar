import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';

function App() {
  return (
    <Router>
      <SidBar />
      <Switch>
        <Route path='/' exact component='Home'></Route>
      </Switch>
    </Router>
  );
}

export default App;
