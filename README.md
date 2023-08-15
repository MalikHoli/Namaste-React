# Class Component
- At the end of the day it is javascript class
- We have already built React.component class provided by React and we just have to extend it 
- The extends keyword is used to create a child class of another class (parent).The child class inherits all the methods from another class.
- Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
- we have Render() method provided which will return the JSX and then it will be compiled by babel and converted to React component which will then display it on UI based on its algorithms

# How to receive props in Class Component
- We have to use super method in the our Class component constructor (refer to code for syntax)
- The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

# Sate Variables in the Class component
- To initialize state variable we have to use this.state which is a object having collection of stare variables
- Never update the the state variables directly for that react has provided us tihs.setState() method which takes an object as an argument and that obect has updated values of state variables (refer to code for more understanding)

# ComponentDidMount
- This is anothoer power (class method) given by React
- First undersand how class based components executes
- For each class based component first constructor() wil be called then render() method and then finally componentDidMount()
- Note in scenario where a Parent class is calling the child class based component then in that case below is the execution of sequence:
    1. Parent constructor
    2. Parent render (This has child class based component)
    3. Child constructor
    4. Child render
    5. Child componentDidMount
    6. Parent componentDidMount
- Also note that componentDidMount is similar to useEffect hook in the function based component
- It is useually used to call the APIs once the component is rendered to provide good user experiance as below:
(We don't want user to kept on waiting and see blank page untill the API fetch is completed instead we provide shimmer UI via render() mothod and then call the API in componentDidMount() then finally when API fetch is complete then we will fill that data instead of shimmer UI)

- Things will be different when we have multiple childs in the Parent class component
- to understand it refer to this link: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- From above diagram we can understand that Mounting of components done in 2 phases: Render and Commit
- in render phase constructor and render methods will be called and in commit phase DOM manupulation takes place
- React smartly do batching of render phase and then starts the Commit phase becasue commit phase has the DOM manupulation task is costly hence to optimize things react batch the reder phase and runs the reconciliation to know the waht is the difference and then finally comr to commit phase and runs the componentDidMount()
- With above knowledge you can now understand why below is the sequence of execution if we have 2 child based component in the parent class based components:
    1. Parent constructor
    2. Parent render (This has 2 child class based component)
    3. First Child constructor
    4. First Child render
    5. Second Child constructor
    6. Second Child render
    7. First Child componentDidMount
    8. Second Child componentDidMount
    9. Parent componentDidMount
- Note that we can directly make componentDidMount method async and use await inside it

# ComponentDidUpdate
- Again refer to the React component lifecycle diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram
- Update phase will be triggered once mount phase is done
- refer to last part of the video to understand how painfull it it to write 'componentDidUpdate' as compated to hooks

# Note that in the useEffect dependancy array in case we want to perform different operations for different dependancy then we can write seperate useEffect hook for that dependancy

# ComponentWillUnmount
- This method will be called just before the component is about to unmount
- This is usefull in case we want to stop doing some things which are not necessary when the component is unmounted
- e.g. In case we have used setinterval() in the componentDidMount then untill and unless we clear it will be create additional setintervals every time the component is mounted hence in ComponentWillUnmount will help us to clear this setinterval

# Note that componentWillUnmount this done in useEffect with the return function as bleow:
- return() => { write your code here to do cleanup before component is unmounted }