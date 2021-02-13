import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AdminAddNew from "./containers/AdminAddNew/AdminAddNew";
import AdminHome from "./containers/AdminHome/AdminHome";
import HomeLogin from "./containers/HomeLogin/HomeLogin";
import UserAbout from "./containers/UserAbout/UserAbout";
import UserContact from "./containers/UserContact/UserContact";
import UserHome from "./containers/UserHome/UserHome";
import SignUp from "./containers/SignUp/SignUp";
import UserShoppingCart from "./containers/UserShoppingCart/UserShoppingCart";

// import NewProduct from "./containers/NewProduct/NewProduct";
// import ProductDetail from "./containers/ProductDetail/ProductDetail";
// import Products from "./containers/Products/Products";
// import About from "./containers/About/About";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeLogin} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/about" component={UserAbout} />
          <Route exact path="/contact" component={UserContact} />
          <Route exact path="/addnewitem" component={AdminAddNew} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/usershoppingcart" component={UserShoppingCart} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/usershoppingcart" component={UserShoppingCart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
