import React from "react";
import UserClass from "./UserClass";

// const About = () => (
//   <div>
//     <h1>About</h1>
//     <h1>This is my first react project</h1>
//     <UserClass name="Classy Mallikarjun" city="Classy Solapur" />
//   </div>
// );

class About extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h1>This is my first react project</h1>
        <UserClass /*name="Classy Mallikarjun" city="Classy Solapur"*/ />
      </div>
    );
  }
}
export default About;
