import React, { useState } from "react";
import State from "./practice/State";

function App(){
    const [state, setState] = useState([
        {name:'mukund',age:22},
        {name:'shivam',age:27},
        {name:'sahil',age:23}
    ]);
    return(
        <>
        <div className="p-3">
            {state.map((item)=>
            <>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
            </>
            )}
            <button onClick={() => setState(()=>
            state.map(item=> item.name === 'shivam' ? {name:'shivam',age:28} : item))} className="bg-blue-300 px-2.5 py-.5 rounded-full mt-3">change age</button>
        </div>
        <hr className="mb-20"/>
        <State/>
        </>
    )
}

export default App;