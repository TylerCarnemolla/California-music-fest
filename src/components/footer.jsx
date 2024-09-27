import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {

    function handleSubmit(){
        alert("Thank you for signing up for our news letter! Check your email for updates!")
    }

    return(
        <div className='p-6'>
            <div className="flex   space-x-28 justify-center rounded-md items-center mt-20 bg-cyan-300">
                <p className="text-black rubik-burned-regular text-3xl">Join The Community</p>
                <form className="flex flex-col  "onSubmit={handleSubmit}>
                    <div className="pt-5">
                        <div className="">
                            <label className="p-3 " htmlFor="Email">Email   </label>
                            <input type="text" id="email" />
                        </div>
                        <div className="mt-5">
                            <label className="p-3" htmlFor="Phone Number">Phone</label>
                            <input type="number" name="Phone Number" id="phone_number" />
                        </div>
                    </div>
                    <button className="button-style bg-cyan-400 rounded-md hover:bg-cyan-500 m-5" type="submit">Submit</button>
                </form>
            </div>
            <p className="flex justify-center mt-5">Subscribe with your email address or phone number to keep up with the latest CKMF news, events, and exclusives.</p>
            <div className='flex mt-5 justify-center space-x-10'>
                <FacebookIcon/>
                <InstagramIcon/>
                <XIcon/>
                <YouTubeIcon/>



            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='text-xl'>Phone: 555-555-5555</p>
                    <p  className='text-xl'>Address: 100 Las Angeles St, LA, 90001</p>
                    <p  className='text-xl'>Email: Support@CKMF.com</p>

                </div>
                <div className='flex'>
                    <p className='text-2xl m-5 mx-10 aldrich-regular'>Combust Energy</p>
                    <p className='text-2xl m-5 mx-10 cinzel '>Pacific Threads</p>
                    <p className='text-2xl m-5 danfo mx-10'>Live Vibes</p>
                </div>
            </div>
        </div>
    )
};