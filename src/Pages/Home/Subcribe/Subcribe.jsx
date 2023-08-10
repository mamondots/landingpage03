
import { FaTelegramPlane } from 'react-icons/fa';

const Subcribe = () => {
    return (
        <div className="bg-[#525FE1] py-12">
            <div className="mt-5 lg:px-96 md:px-40px px-10 py-8">
                <div className="text-center text-white">
                    <p className="font-medium tracking-wider">SUBSCRIBE NEWSLETTER</p>
                    <h2 className="py-2 lg:text-4xl font-bold md:text-3xl text-2xl">Get Every Latest News</h2>
                </div>
                <div className='flex justify-center items-center mt-8'>
                     <form className='flex items-center px-12px py-4 rounded bg-white w-full'>
                         <input className='w-full outline-none px-8' type="email" name="email" placeholder="Enter your email address" />
                         <p className='text-[#525FE1] mr-8 text-xl'><FaTelegramPlane></FaTelegramPlane></p>
                     </form>
                </div>
            </div>
        </div>
    );
};

export default Subcribe;