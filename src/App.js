import './App.css';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';





function App() {
  return (
    <div className="App">
         <AuthProvider>

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
            
              <PrivateRoute path="/booking/:serviceId">
                 <Booking></Booking>
            </PrivateRoute>

              <Route path="/login">
                 <Login></Login>
            </Route>
            <Route path="*">
                 <NotFound></NotFound>
            </Route>
            
          </Switch>

          <Footer></Footer>

          </Router>

         </AuthProvider>
      
    </div>
  );
}

export default App;
