import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminAddNew from "./containers/AdminAddNew/AdminAddNew";
import AdminHome from "./containers/AdminHome/AdminHome";
import AdminEdit from "./containers/AdminEdit/AdminEdit";
import Footer from "./components/Footer/Footer";
import HomeLogin from "./containers/HomeLogin/HomeLogin";
import SignUp from "./containers/SignUp/SignUp";
import UserAbout from "./containers/About/UserAbout";
import UserHome from "./containers/UserHome/UserHome";
import UserShoppingCart from "./containers/UserShoppingCart/UserShoppingCart";
import Checkout from "./containers/Checkout/Checkout";
import AddressForm from "./containers/AddressForm/AddressForm";
import PaymentForm from "./containers/PaymentForm/PaymentForm";
import Review from "./containers/Review/Review";

// import NewProduct from "./containers/NewProduct/NewProduct";
// import ProductDetail from "./containers/ProductDetail/ProductDetail";
// import Products from "./containers/Products/Products";
// import About from "./containers/About/About";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/addnewitem" component={AdminAddNew} />
          <Route exact path="/adminedit" component={AdminEdit} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/" component={HomeLogin} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={UserAbout} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/usershoppingcart" component={UserShoppingCart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/usershoppingcart" component={UserShoppingCart} />
          <Route exact path="/addressform" component={AddressForm} />
          <Route exact path="/paymentform" component={PaymentForm} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
