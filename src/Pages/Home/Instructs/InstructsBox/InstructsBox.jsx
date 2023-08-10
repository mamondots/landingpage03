import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram,AiFillYoutube } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import './InstructsBox.css'
const InstructsBox = ({member}) => {
    const {image,name,position} = member
    return (
        <div className='relative cursor-pointer full-box'>
            <img className="w-full rounded" src={image} alt="" />
            <div className='bg-white px-4 py-4 absolute lg:bottom-[-30px] bottom-[-10px] ml-4 w-full rounded z-10 short-box'>
                 <h2 className='text-xl font-semibold '>{name}</h2>
                 <p className='text-[#424242d5]'>{position}</p>
                 <div className='flex py-2 space-x-4 text-xl text-[#525FE1]'>
                     <p><BiLogoFacebook></BiLogoFacebook></p>
                     <p><AiOutlineInstagram></AiOutlineInstagram></p>
                     <p><BiLogoLinkedin></BiLogoLinkedin></p>
                     <p><AiFillYoutube></AiFillYoutube></p>
                 </div>
            </div>
        </div>
    );
};

export default InstructsBox;