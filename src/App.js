import React from 'react';
import Profile from "./Profile/profile";
import pic from "./images/moi.png";
import Header from "./Profile/header";
import Footer from "./Profile/footer";

function App() {
  const name = "yesmine makkes";
  const mybio = "photographer storyteller";
  const pro = "I am student still :(";
  const hello = () => alert("Helloo!");
  const howAreYou = () => alert("How are youu!");
  const niceDay = () => alert("Have a nice Daaay!");
  const coockie = () => alert("Are you hugry? here some cookies!");
  const bye = () => alert("byee see you soon!");
  return (
    <>
      <Header />
      <Profile fullName={name} bio={mybio} profession={pro} hello={hello} howAreYou={howAreYou} niceDay={niceDay} coockie={coockie} bye={bye} age="21">
        <img src={pic} alt="moi" onLoad={() => alert("this is yesmine")} onError={()=>alert("ugh.. something went wrong!")}/>
      </Profile>
      <Footer />
    </>
  );
}
export default App;
