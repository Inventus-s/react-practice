import React from 'react';

const Nav = ({data}) => {
    return (
        <div className='flex w-full justify-between items-center'>
            <h3 className='text-lg font-bold'>SpotiGuy</h3>
            <div className='flex gap-2 bg-orange-600 p-1 px-3 rounded-md text-white'>
                <h3>Favourites</h3>
                <h5>{data.filter(item => item.added).length}</h5>
            </div>
        </div>
    );
}

export default Nav;
