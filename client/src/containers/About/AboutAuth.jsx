import React from "react";
import "./UserAbout.css";
import AuthFooter from "../../components/Footer/AuthFooter";
import SearchAppBar from "../../components/SearchAppBar/SearchAppBar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const AboutAuth = () => {
  return (
    <div className="user-about">
      <SearchAppBar />
      <Container maxWidth="lg">
        <Paper className="paper-content">
            Baby Driver is a unique app that gives its users (typically mothers
            with young children), the ability to order baby-specific supplies
            from the comfort of their own home, or closest tech device. Created
            in February 2021 by recent Georgia Tech Full Stack Development
            Bootcamp graduates Bambo Adeshiyan, Dempsey Finley-Price and
            Carlicia Smith, the app's functionality allows its users to simply
            filter products with a search input, add products to their cart,
            edit shopping cart choices, and reorder previously purchased items.
            The app also eliminates the need for users to go out into public
            spaces, possibly exposing a mother and her newborn to the COVID-19
            virus. For additional information regarding the app's founders, you
            can reach them at the following: github.com/badeshiyan,
            github.com/Dempsey496 and https://github.com/smith-carlicia.
        </Paper>
      </Container>
      <AuthFooter />
      </div>
  );
};

export default AboutAuth;
