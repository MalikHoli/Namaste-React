# Default import/Export
- This type of export/import is used when we have to export/import only a single variable/function
- e.g. export default <name of variable>;
- e.g. import <name of variable> from <path of the import file>
- You can import default export with any name hence it is possible to default export an anonymous function

# Named import/Export
- This type of export/import is used when we have to export/import multiple variable/function
- e.g. export <name of variable>;
- e.g. import <{name of variable}> from <path of the import file>
- Named import must be imported with same name it used to export

# Note that a module can export only a single default but multiple named exports

# Export declarations are not subject to temporal dead zone rules. You can declare that the module exports X before the name X itself is declared.
export { x };
const x = 1;
This works, because `export` is only a declaration, but doesn't utilize the value of `x`.

# React Hooks
- At the end of the day it is just a javascript function given to us by React (it has some superpowers) - written by Meta developers
- So all such superpowered functions provided by React are called React Hooks
    # UseState 
    - will give you superpowerful react variable
    - It is store the state of react component (Which is at the end of the day is JS function)
    - For normal variable we declare like "let var = []" similarly react powered state variables can be declared like "const [var] = useState([])" 
    - Now if we want to modify the variable value then we do "var = [1,2]" similarly in react we do that using function as below
    - we first write "const [var,setVar] = useState([])" this will provide us with setVariable function in which we pass the desired modification as argument e.g. "setVar([1,2])"
    - Note that var in above statement is a variable but setVar is a function

    - Whenever a state updates react rerenders the component