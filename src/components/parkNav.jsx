import FmdGoodIcon from '@mui/icons-material/FmdGood'
import MusicNoteIcon from '@mui/icons-material/MusicNote'

const parkNav = () =>{
  
    return(
        <div className='flex flex-col items-center'>
        <p  className='flex justify-center m-20 rubik-burned-regular text-center  text-6xl'>Getting Here</p>
        <p className='text-3xl'><FmdGoodIcon fontSize='large'/> Venice Beach Skate Park</p>
        <p className='flex justify-center m-2  text-center text-2xl'>California Kings Festival is located on the shore past the skatepark at the end of Horizon Ave and Market Street.</p>
        <p className='flex justify-center m-2  text-center text-2xl'>Ticket booths and entrances are spaced evenly on the board walk between Brooks Ave and Virgina Ct.</p>
        <p className='flex justify-center m-2 mb-20 text-center text-2xl'>We encourage using our shuttle service, public transport, walking, or bycicle</p>
        
       <img className="w-2/3 border-8 border-cyan-300 rounded-md mb-20 "src="../src/assets/images/Beach_map.jpg" alt="" />
       <p className='flex justify-center m-2  text-center text-2xl'><MusicNoteIcon fontSize='large'/>Stage C - South of skatepark</p>
       <p className='flex justify-center m-2  text-center text-2xl'><MusicNoteIcon fontSize='large'/>Stage B - North of skatepark</p>
       <p className='flex justify-center m-2  text-center text-2xl'><MusicNoteIcon fontSize='large'/>Main Stage - West of skatepark</p>
   </div>
    )
};export default parkNav