import React from "react";
import ReactDOM from "react-dom/client";

// React Elements - it is an object
// We are creating react equivalent of h1 html tag here
// but it is not developer friendly to write the h1 tag like this when we have simple way to do so with html
// Hence JSX comes into picture
/*const heading = React.createElement("h1",{id:"heading"},"Namaste Mallikarjun")*/

// JSX 
//- easy way to create react element using javascript syntax
//- No JSX is not part of React core
//- We can build react without JSX but JSX make the life of developer easier
/*****const heading = <h1 id="heading">Namaste Mallikarjun from JSX</h1>*****/
// No JSX is NOT HTML inside javascript
// JSX is HTML like syntax
// There is a babel compiler which compiles the code and convert this JSX into react element which is a javascript objetc
// If you would not have babel compiler then above code will be syntax error
// When we install "Parcel" it automatically installs babel as a part of TRANSITIVE DEPENDANCY


// React Components
// - Functional components
// - Class components

//Below is example of functinal component returning JSX
//Note that we are just returning single JSX statement
/****
  const Heading = function (){
    return <h1 id="heading">Namaste Mallikarjun from JSX</h1>
}
*****/

//Note that when we are returning JSX in multiple stateements then below is the syntax with ()
/****
const Heading = function (){
    return (
        <>
        <h1 id="heading">Namaste Mallikarjun from JSX</h1>
        <p>Great! You are laying the foundation</p>
        </>
    )
}
*****/

// In industry mostly below syntax is used while creating react component
// Note that we can ignore return and {} while using arrow function if we are returning single statement
// because we are incorporating multiple JSX statements into () hence for arrow function this is like return with single statements
// hence we can ignore {} and return keyword as shown in below syntax
/*** 
const Heading = () => (
    <>
        <h1 id="heading">Namaste Mallikarjun from JSX</h1>
        <p>Great! You are laying the foundation</p>
    </>
)
***/

//Below is the example of COMPONENT COMPOSITION
// It is just using another component into component
/*** 
const Heading = () => (
        <>
        <h1 id="heading">Namaste Mallikarjun from JSX</h1>
        <Para/>
        </>
        )
        
const Para = ()=>(
    <p>Great! You are laying the foundation</p>
   )
***/

// We can write javascript code inside JSX using {} as below
// Now using {} we can write react element inside react component and also react element into react element
/*** 
const vName = <i>Mallikarjun</i>
const vPara = <p>Great! You are laying the foundation {vName}</p>

const Heading = () => (
    <>
    <h1 id="heading">Namaste {vName} from JSX</h1>
    {vPara}
    </>
)
***/

// At the end of day the functional component is a javascript function hence below code is alos valid
/*** 
const vName = <i>Mallikarjun</i>

const Para = ()=>(
    <p>Great! You are laying the foundation {vName}</p>
   )
const Heading = () => (
    <>
    <h1 id="heading">Namaste {vName} from JSX</h1>
    {Para()} 
    <Para/>
    <Para></Para>
    </>
)
***/

// React.Fragment is useful when we want to show multiple parents in a component
// Note that it is coming from React
// However <></> is not react but given by JSX to make it easier
const vName = <i>Mallikarjun</i>

const Para = ()=>(
    <p>Great! You are laying the foundation {vName}</p>
   )
const Heading = () => (
    <React.Fragment>
    <h1 id="heading">Namaste {vName} from JSX</h1>
    <Para/>
    </React.Fragment>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

// When we render the react element(which is JS object) then it will convert to HTML element
/*** root.render(heading) ***/

// This is how we render the react component
// Note that coponent name should start with capital letter otherwise it will result into an error
// Also this is nothing but a functional coponent which is returning react element hence console log it and you will get react element (JS object)
// Note that "heading" is react element and "Heading" is react component
root.render(<Heading />)
//
// console.log(<Heading />)