import React from "react";
import LoginAppBar from "../../components/LoginAppBar/LoginAppBar";
import Container from "@material-ui/core/Container";

const UserAbout = () => {
  return (
    <>
      <LoginAppBar />
      <Container style={{ marginTop: "100px" }}>
        <div className="col s12">
          Baby Driver is a unique app that gives its users (typically mothers with
          young children), the ability to order baby-specific supplies from the
          comfort of their own home, or closest tech device. Created in February
          2021 by recent Georgia Tech Full Stack Development Bootcamp graduates
          Bambo Adeshiyan, Dempsey Finley-Price and Carlicia Smith, the app's functionality allows
          its users to simply filter products with a search input, add products to their
          cart, edit shopping cart choices, and reorder previously purchased items. The
          app also eliminates the need for users to go out into public spaces,
          possibly exposing a mother and her newborn to the COVID-19 virus.
        </div>
      </Container>
    </>
  );
};

export default UserAbout;
