import React from "react";

const Card = ({items,index,handleClick}) => {
    const {name, profession, image, added} = items;
  return (
    <div className="bg-white w-40 h-60 p-2 rounded-md">
      <div className="bg-zinc-500 w-full h-40">
        <img className="w-full h-full object-cover" src={image} />
      </div>
      <div className="flex w-full justify-between mt-2 mb-1">
        <h3 className="font-semibold">{name}</h3>
        <h5 className="text-sm">{profession}</h5>
      </div>
      <button onClick={()=>handleClick(index)} className={`p-1 px-3 rounded-md text-sm text-white text-center ${added ? "bg-green-500" : "bg-blue-500"} `}>{added ? "Added" : "Add Friend"} </button>
    </div>
  );
};

export default Card;
