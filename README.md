# More on UseEffect
- If there is no dependancy array then useEffect will be called for every render
- If there is empty dependacy array then useEffect will be called only once on the initial render.
- If we provide something in array then useEffect will be called every time that something is chnaged

# useState best practise - Try not to use useState variables in IF,FOR statements or inside any functions also outside functional component (As per react documentation it will lead to inconsistancy)

# because useState represents the local state of the react functional component hence it does not make sense to use it outside functional component

# React routes
- whenever we write routes we need to set up routing configuration mainly in App.js (root app)
- This configuration is the information that will tell browser router what should happen on specific path or what should happend when we click the specific URL
- We can set this configuration using "createBrowserRouter" function provided by "react-router-dom"
- This function takes array of paths and each these paths are provided as a object
- Now we have set up the configuration but we also need to provide this configuration to app and that is done using "RouterProvider"
- "RouterProvider" is another COMPONENT (<RouterProvider />) provided by "react-router-dom" to provide the "createBrowserRouter" router configuration to our web app
- refer to code to get the syntax of how to provide configuration to this "RouterProvider" component