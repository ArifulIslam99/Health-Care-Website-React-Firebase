import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Successfull from './Pages/Appointment/Successfull';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
function App() {
   
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter> 
          <Header></Header>
           <Switch>
              <Route exact path="/">
                 <Home></Home>
              </Route>
              <Route  path="/home">
                 <Home></Home>
              </Route>
              <PrivateRoute exact path="/booking">
                 <Appointment></Appointment>
              </PrivateRoute>
              <PrivateRoute path="/doctors">
                 <Doctors></Doctors>
              </PrivateRoute>
              <Route path="/booking/success">
                 <Successfull></Successfull>
              </Route>
              <Route path="/about">
                 <About></About>
              </Route>
              <Route path="/login">
                 
                  <Login></Login>
                
              </Route>
              <Route path="/register">
                 <Register></Register>
              </Route>
              <PrivateRoute path="/services/:serviceName">
                 <ServiceDetails></ServiceDetails>
              </PrivateRoute> 
              <Route path='*'>
                 <NotFound></NotFound>
              </Route>
           </Switch>
           <Footer></Footer>
       </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
