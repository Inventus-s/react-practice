import React, { useState } from "react";
import State from "./practice/State";
import Card from "./practice/Card";

function App() {
    const raw = [
        {name:"Sneha", profession:"Model", image:"https://images.pexels.com/photos/20593980/pexels-photo-20593980/free-photo-of-a-woman-in-a-red-dress-is-posing-for-a-picture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", added:false},
        {name:"Mukund", profession:"Coder", image:"https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600", added:false},
        {name:"Shreya", profession:"Manager", image:"https://images.pexels.com/photos/3270230/pexels-photo-3270230.jpeg?auto=compress&cs=tinysrgb&w=600", added:false},
        {name:"Sahil", profession:"Nashedi", image:"https://images.pexels.com/photos/848117/pexels-photo-848117.jpeg?auto=compress&cs=tinysrgb&w=600", added:false},
    ]
  const [state, setState] = useState(raw);

  const handleClick = (i) => {
    setState((prev) => {
        return prev.map((item,index) => {
            if(index === i) return {...item, added:!item.added};
            return item;
        })
    })
  }

  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
    {state.map((item,i) => (
        <Card key={i} index={i} items={item} handleClick={handleClick} />
    ))}
    </div>
  );
}

export default App;
