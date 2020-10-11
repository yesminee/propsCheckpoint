import React from 'react';
import Profile from "./Profile/profile";
import pic from "./images/moi.png";
import Header from "./Profile/header";
import Footer from "./Profile/footer";
import propTypes from "prop-types"; //its propTypes not PropTypes ;)

function App() {
  const name = "yesmine makkes";
  const mybio = "photographer storyteller";
  const pro = "I am student still :(";
  const hello = () => alert("Helloo!");
  App.propTypes = { fullName: propTypes.string, hello: propTypes.func, bio: propTypes.string, profession: propTypes.string, age: propTypes.string };
  return (
    <>
      <Header />
      <Profile fullName={name} bio={mybio} profession={pro} hello={hello} age="21">
      <img src={pic} alt="moi" />
      </Profile>
      <Footer />
    </>
  );
}
export default App;
