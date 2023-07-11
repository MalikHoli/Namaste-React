# Style in JSX
- Need to create object with key:value pair like we give inline style in HTML
- e.g. In this example styleCard is the JS object "<div className = "res-card" style={styleCard}></div>"
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