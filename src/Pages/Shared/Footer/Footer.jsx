import './Footer.css'
import { FaFacebookF,FaLinkedinIn,FaTwitter,FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#231F40]'>
            <div className="lg:px-20 md:px-12px px-8 py-8 z-20">
                 <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-12 gap-4 text-white py-12'>
                    <div>
                        <h2 className='text-xl font-bold py-2'>Mamondots</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                        <div className='flex space-x-4 py-4'>
                            <p className='px-3 py-3 rounded bg-[#393653] text-white text-xl font-semibold hover:bg-[#525FE1] duration-300'><FaFacebookF></FaFacebookF></p>
                            <p className='px-3 py-3 rounded bg-[#393653] text-white text-xl font-semibold hover:bg-[#525FE1] duration-300'><FaLinkedinIn></FaLinkedinIn></p>
                            <p className='px-3 py-3 rounded bg-[#393653] text-white text-xl font-semibold hover:bg-[#525FE1] duration-300'><FaTwitter></FaTwitter></p>
                            <p className='px-3 py-3 rounded bg-[#393653] text-white text-xl font-semibold hover:bg-[#525FE1] duration-300'><FaYoutube></FaYoutube></p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold py-2'>Explore</h2>
                        <ul className='space-y-3 text-base'>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Upcoming Events</a></li>
                            <li><a href="">Blog & News</a></li>
                            <li><a href="">FAQ Question</a></li>
                            <li><a href="">Testimonial</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                    <h2 className='text-xl font-bold py-2'>Useful Links</h2>
                        <ul className='space-y-3 text-base'>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Pricing Plan</a></li>
                            <li><a href="">Instructor Profile</a></li>
                            <li><a href="">Purchase Guide</a></li>
                            <li><a href="">Popular Courses</a></li>
                            <li><a href="">Event Details</a></li>
                        </ul>
                    </div>
                    <div>
                    <h2 className='text-xl font-bold py-2'>Contact Info</h2>
                        <ul className='space-y-3 text-base'>
                            <li><a href="">House No:20, Road No:02 Mirpur, Dhaka, Bangladesh</a></li>
                            <li><a href="">+ 8801646286477</a></li>
                            <li><a href="">+ 88019658751957</a></li>
                            <li><a href="">mamonrabin@gmail.com</a></li>
                            
                        </ul>
                    </div>
                 </div>
            </div>
            
        </div>
    );
};

export default Footer;