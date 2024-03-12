import { useState } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'

function App() {
  const raw = [
    {song:"Naina", image:"https://i1.sndcdn.com/artworks-pcJRHx9X165DTpzp-MyKyyQ-t500x500.jpg", artist:"Diljit",added:false},
    {song:"Shaayar", image:"https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/8b/67/20/8b67200d-2b0a-08d8-8f39-27d9089c4e40/7cede38c-6d30-4d97-8839-7fef12804adb_ami-identity-66cca7367521f1c71cddd520ba9f1380-2023-08-18T14-41-46.182Z_cropped.png/375x375bb.jpg", artist:"Seedhe Maut",added:false},
    {song:"Haule Haule", image:"https://i.scdn.co/image/ab67616d0000b2739e89a65d75e201117dc52002", artist:"Aditya Rikhari",added:false},
    {song:"Dhanak", image:"https://i1.sndcdn.com/artworks-jfvwmf1URwVg-0-t500x500.jpg", artist:"HYDR",added:false},
  ]
  const [data, setData] = useState(raw);

  const handleClick = (cardIndex)=>{
    setData((prev)=>{
      return prev.map((item,index)=>{
        if(index === cardIndex) return {...item, added: !item.added};
        return item;
      })
    })
  }

  return (
    <div className='bg-zinc-300 w-full h-screen p-10'>
      <Nav data={data}/>
      <div className='flex gap-8 justify-center flex-wrap mt-10'>
      {data.map((item,index)=>
        <Card data={item} key={index} index={index} handleClick={handleClick} />
      )}
      </div>
      
    </div>
  )
}

export default App
