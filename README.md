# Monilith Architechture
- IN this we have all the services like API,backend,database,SMS,Email,Authentication in a single project

# Microservices Architechture
- In this all the services are seperated in terms of project 
- You would have diff team for API building then diff for UI using react and diff for backend using Java and so on
- These all services run on their specific ports e.g. in this project we have our UI service at port 1234 then all these ports can be mapped to domain name
   consider that :1234 --> UI then :1000 --> SMS :3000 --> backend
   now all these above ports would have same ip just different ports (suppose http://holikma.com is that ip/domain)
   hence we can say http://holikma.com/ is for port 1234
   hence we can say http://holikma.com/sms is for port 1000
   hence we can say http://holikma.com/backend is for port 3000
- Hence these microservices can communicate with each other using above address

# Shimmer UI
- There is slight delay in fetching the data from API and then displaying it on the screen
- This small gap of some few millisecond can ruine the user experiance
- We can fill the gaps using shimmer UI (Reload the youTube and you will se some placeholder cards being shown first and then it will be replaced by video card)
- This fake placeholder in above example is called shimmer UI

# Note that you cannot use for loop inside JSX as JSX expects inside of it to return object(react element) but for loop returns nothing just iterates while map can return values hence we can use map but not for loop inside JSX

# Read more about useEffect by refering to comment section of Body.js component