import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Successfull from './Pages/Appointment/Successfull';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
       <BrowserRouter> 
          <Header></Header>
           <Switch>
              <Route exact path="/">
                 <Home></Home>
              </Route>
              <Route  path="/home">
                 <Home></Home>
              </Route>
              <Route exact path="/booking">
                 <Appointment></Appointment>
              </Route>
              <Route path="/doctors">
                 <Doctors></Doctors>
              </Route>
              <Route path="/booking/success">
                 <Successfull></Successfull>
              </Route>
              <Route path="/about">
                 <About></About>
              </Route>
              <Route path="/login">
                 <Login></Login>
              </Route>
           </Switch>
           <Footer></Footer>
       </BrowserRouter>
    </div>
  );
}

export default App;
