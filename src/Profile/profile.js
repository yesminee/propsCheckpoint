import React from "react";


const Profile = (props) => {
  
  const styleName = {letterSpacing: "0.3em", textShadow: "1px", fontWeight: "700", fontSize:"15px"};
  const styleBio = {letterSpacing: "0.3em", textShadow: "1px",fontSize: "15px"};
  const styleProf = {letterSpacing: "0.3em",color: "black", fontSize: "15px"};
    
  return (
    <div>
      <div >{props.children}</div>
      <div style={styleName}>{props.fullName}<span>{", "+props.age+" years old."}</span></div>
      <div style={styleBio}>{props.bio}</div>
      <div style={styleProf}>{props.profession}</div>
      <div>{props.hello}</div>
      <button onClick={props.hello}>
        ClickMe
        </button>
      </div>
    );
};
export default Profile;
