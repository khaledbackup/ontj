import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MoreInformation from './pages/MoreInformation';
import Projetcs from './pages/Projetcs';

import News from './pages/News';

function App() {
  return (
    <div className="App">
     
      <Header/>
      <Switch>
        
        <Route exact path='/' component={Home} />
        <Route  path='/moreInformations' component={MoreInformation} />
        <Route path = '/projects' component={Projetcs}/>
        <Route  path='/news' component={News} />
      </Switch>
       <Footer/>
     
    </div>
  );
}

export default App;
