import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminAddNew from "./containers/AdminAddNew/AdminAddNew";
import AdminHome from "./containers/AdminHome/AdminHome";
import Footer from "./components/Footer/Footer";
import HomeLogin from "./containers/HomeLogin/HomeLogin";
import SignUp from "./containers/SignUp/SignUp";
import UserAbout from "./containers/About/UserAbout";
import UserHome from "./containers/UserHome/UserHome";
import UserShoppingCart from "./containers/UserShoppingCart/UserShoppingCart";

// import NewProduct from "./containers/NewProduct/NewProduct";
// import ProductDetail from "./containers/ProductDetail/ProductDetail";
// import Products from "./containers/Products/Products";
// import About from "./containers/About/About";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/addnewitem" component={AdminAddNew} />
          <Route exact path="/" component={HomeLogin} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={UserAbout} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/usershoppingcart" component={UserShoppingCart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
