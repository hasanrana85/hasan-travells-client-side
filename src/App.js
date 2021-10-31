import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Manage from './Pages/Manage/Manage';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import OrderDetails from './Pages/OrderDetails/OrderDetails';
import MyOrder from './Pages/MyOrder/MyOrder';
import AuthProvider from './context/AuthProvider';
import Registration from './Pages/Registration/Registration';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
            <Router>
        <Header></Header>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route exact path = "/home">
            <Home></Home>
          </Route>
          <Route path ="/services">
            <Services></Services>
          </Route>
          <Route path ="/about">
            <About></About>
          </Route>
          <Route path = '/manage'>
            <Manage></Manage>
          </Route>
          <Route path = "/contact">
            <Contact></Contact>
          </Route>
          <Route path ="/myOrder">
            <MyOrder></MyOrder>
          </Route>
          <PrivateRoute path = "/orderDetails/:serviceId">
            <OrderDetails></OrderDetails>
          </PrivateRoute>
          <Route path = "/registration">
            <Registration></Registration>
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
