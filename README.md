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


# CORS
- You may have encountered this error
- CORS stands for "cross origin resourse sharing"
- consider origin as any website domain/domain:port/subdomain
- cross origin word represnts communication between different domain/domain:port/subdomain
- Note that when you create server then by default you can share its resourses only if request comes from that server itself
- example of above statement is : when you setup express.js server and host static files and then from same port you access resource and GET/POST methoda also made from same port hence you never encountered such error
- once you set up react-dev which was running on different port (origin) and tries to make request to this express.js port you would have get CORS
- this happens because actually executing POST/GET... methods browser sends a preflight request to server and if it doesn't find "Access-Control-Allow-Origin" header in the response then it basically gives this error
- Hence to resolve this we use cors package help in express.js and set it in the middleware which then sets the value by default "*" to "Access-Control-Allow-Origin" in response header
- "*" means all origins allowed to access the resourse from this server otherwise you can also provide the origin specifically in case you want it to restrict