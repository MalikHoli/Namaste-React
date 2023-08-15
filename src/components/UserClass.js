import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 1
      userInfo: {
        name: 'Mallikarjun',
        location: 'Solapur'
      }
    }
  }

  async componentDidMount(){
    // let vjson = await fetch("https://api.github.com/users/MalikHoli")
    let vjson = await fetch("https://api.github.com/users/akshaymarch7")
    let data = await vjson.json()
    console.log(data)
    this.setState({
      userInfo: data
    })
  }

  render() {
    const {name,location,avatar_url} = this.state.userInfo
    let avatar_url_attrubutes = {
      height: 50,
      width: 80
    }
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Not Available" style={avatar_url_attrubutes}/>
        {/* <h1>Class State Variables</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={()=>{
          //Never update the state variables directly as below:
          // this.state.count = this.state.count +1
          this.setState({
            count: this.state.count +1
          })
        }}>Increase Count by 1</button> */}
        <p>Name: {name}</p>
        <p>City: {location}</p>
        <p>Mail-id: malika@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
