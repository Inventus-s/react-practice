import React from 'react';

const Card = ({data,index,handleClick}) => {
    const {song,artist,image,added} = data;
    return (
        <div className='relative w-[20vw] h-40 bg-white mt-10 p-2 flex gap-4 rounded-md'>
            <div className='bg-blue-200 w-[9vw] h-[9vw] rounded-md overflow-hidden'>
                <img className='w-full h-full object-cover' src={image} />
            </div>
            <div>
                <h3 className='text-lg font-semibold'>{song}</h3>
                <h5>{artist}</h5>
            </div>
            <button onClick={()=>handleClick(index)} className={`absolute bottom-0 py-1 px-3 ${added ? "bg-teal-400" : "bg-orange-600"} rounded-md text-white translate-y-[50%] left-1/2 -translate-x-[50%] whitespace-nowrap`}>{added ? "Favourite" : "Add to Favourites"}</button>
        </div>
    );
}

export default Card;
