import React from "react";
import propTypes from "prop-types"; //its propTypes not PropTypes ;)

const Profile = (props) => {
  
  const styleName = {letterSpacing: "0.3em", textShadow: "1px", fontWeight: "700", fontSize:"15px"};
  const styleBio = {letterSpacing: "0.3em", textShadow: "1px",fontSize: "15px"};
  const styleProf = {letterSpacing: "0.3em",color: "black", fontSize: "15px"};
  Profile.propTypes = { fullName: propTypes.string, hello: propTypes.func, bio: propTypes.string, profession: propTypes.string, age: propTypes.string };
    
  return (
    <div>
      <div >{props.children}</div>
      <div style={styleName}>{props.fullName}<span>{", "+props.age+" years old."}</span></div>
      <div style={styleBio}>{props.bio}</div>
      <div style={styleProf}>{props.profession}</div>
      <button onClick={props.hello}>
        ClickMe!
        </button>
      <button onMouseLeave={props.coockie}>
        leave me alone!
        </button>
      <button onMouseOver={props.howAreYou}>
        pass by me!
        </button>
      <button onDoubleClick={props.niceDay}>
        double ClickMe!
        </button>
      <button onMouseEnter={props.bye}>
        Come to me!
        </button>
        
      </div>
    );
};
export default Profile;
