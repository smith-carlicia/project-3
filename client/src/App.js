import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutAuth from "./containers/About/AboutAuth";
import AdminAddNew from "./containers/AdminAddNew/AdminAddNew";
import AdminHome from "./containers/AdminHome/AdminHome";
import AdminEdit from "./containers/AdminEdit/AdminEdit";
import HomeLogin from "./containers/HomeLogin/HomeLogin";
import SignUp from "./containers/SignUp/SignUp";
import UserAbout from "./containers/About/UserAbout";
import UserHome from "./containers/UserHome/UserHome";
import UserShoppingCart from "./containers/UserShoppingCart/UserShoppingCart";
import Checkout from "./containers/Checkout/Checkout";
import Review from "./containers/Review/Review";

function App() {
  return (

    <div id="user-about">
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
        <Route exact path="/review" component={Review} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/aboutauth" component={AboutAuth} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
