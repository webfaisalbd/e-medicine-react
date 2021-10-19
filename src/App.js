import './App.css';
import Services from './Pages/Home/Services/Services';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Booking from './Pages/Booking/Booking';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';



function App() {
  return (
    <div className="App">
          <Router>
                   <Header> </Header>
                   
          <Switch>
              <Route exact path="/">
                   <Home></Home>
              </Route>
              <Route path="/home">
                   <Home></Home>
              </Route>
              <Route path="/services">
              <Services></Services>
              </Route>
            
              <Route path="/booking/:serviceId">
                 <Booking></Booking>
            </Route>

              <Route path="/login">
                 <Login></Login>
            </Route>
            <Route path="*">
                 <NotFound></NotFound>
            </Route>
            
          </Switch>

          <Footer></Footer>

          </Router>


    </div>
  );
}

export default App;
