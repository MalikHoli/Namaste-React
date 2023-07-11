# Parcel
- Dev Build
- Local Server
- HMR (Hot Module Replacement) (The ability to refresh the browser when we save the code)
- HMR is done using File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bunding (Ability to support older browers and other devices)
- Diagnostic
- Eror Handling
- Ability to host on HTTPs
- Tree Shaking (Remove unused code)
- Different dev and prod bundles
_____________________________________________________________________________________
- npm is NOT "Node Package Manager" its already told in their official website in a funny way
- yes npm is a package manager which helps us to manage all the packages we will be installing and maintaining for our project
- package can also known as dependancy
- npm init is used to set up our package and will produce package.json
- packag.json will keep track of all dependancies
in package.json you would have seen dependancies with '^' and '~' at the begining
e.g. ":"Parcel": "^2.8.3"
^ indicates that Parcel should update itself if the update available is the minor update 
~ indicates that Parcel should update itself if the update available is the major update 
minor update is generally in our above example 2.8.4/5/6/7
minor update is generally in our above example 3.0.0


Heard of "webpack, parcel, veet"? these bundler
bundlers are used to minify,clean,compress the code to make it production ready

npm install -D parcel
what is -D?
There are 2 types of dependancy: DEV dependancy and Normal dependancy(these are used in production also)
-D is indicating we wanted to install dev dependancy

Note that after npm install there are lot of folders comining inside "node_modules" folder
You may wonder I have installed only "Parcel" but why I am getting so huge list of other folders?
They are dependancies of Parcel and those dependancy might have another dependancy and so on this is called as "TRANSITIVE DEPENDANCIES"

package-lock.json has information about each and every dependancy in node_modules also it has a "integrity" attribute which provides hashing key for each dependancy so that production and development code runs on exactly same dependancies

We can add "browserslist" object in package.json to tell server what versions of browsers the project should be definitly compatible with
refer to browserslist.dev to get more information
____________________________________________________________________________________________________

# Style in JSX
- Need to create object with key:value pair like we give inline style in HTML
- e.g. In this example styleCard is the JS object <div className = "res-card" style={styleCard}></div>
- const styleCard = {backgroundColor: red, border:1px}

# Config Driven UI
- Wehn wesite is driven by data (config) then its config driven UI
- so basically how a UI will look decided based on data
- In case of swiggy website for Bengalore will be different from Delhi 

# Keys
- Whenever we loop over a reusable component in React then it is best practise to provide keys(unique id) as props
- If we not provide then there will be significant perfomance hit as react will then rerender all components if there is modification in the list based on which we were looping over
- It is recommended not to use index as a key 
- Use index as a key if and only if we dont have unique Id coming in from backend itself

- IMP THING I NOTED IS WARNING WILL BE GIVEN WHEN WE LOOP THROUGH BUT NOT WHEN WE REPEAT THE COMPONENT (RESEARCH ON THIS)