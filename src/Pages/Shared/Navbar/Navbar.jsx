import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import Headroom from "react-headroom";

import './Navbar.css'
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <Headroom>
            <div className="bg-white z-20 relative">
            <div className="lg:px-20 md:px-12px px-8 py-8 z-20">
            <div className="flex justify-between items-center">
                 <div>
                    <Link to="home" smooth={true} duration={1000}>
                    <h2 className="text-2xl cursor-pointer font-bold lg:font-semibold md:font-medium text-[#525FE1]">Mamondots</h2>
                    </Link>
                 </div>
                 <div className="hidden lg:block">
                 <div className="flex items-center list-none nav">
                       <li>
                        <Link to="home" smooth={true} duration={1000}><a href="">Home</a>
                        </Link>
                        </li>

                       <li>
                        <Link to="about" smooth={true} duration={1000}><a href="">About us</a>
                        </Link>
                        </li>

                       <li>
                        <Link to="courses" smooth={true} duration={1000}><a href="">Courses</a>
                        </Link>
                        </li>

                       <li>
                        <Link to="instructor" smooth={true} duration={1000}><a href="">Instructor</a>
                        </Link>
                        </li>

                       <li>
                        <Link to="blogs" smooth={true} duration={1000}><a href="">Blogs</a>
                        </Link>
                        </li>

                       <li>
                        <Link to="event" smooth={true} duration={1000}><a href="">Event</a>
                        </Link>
                        </li>
                 </div>
                 </div>
                 <div className="flex items-center">
                    <div className=" hidden lg:block">
                    <div className="flex items-center">
                    <p className="bg-[#525FE1] text-white py-3 text-lg px-3 rounded cursor-pointer hover:scale-95 duration-300 mr-2"><RiSearchLine></RiSearchLine></p>
                    <button className="flex items-center bg-[#525FE1] text-white py-2 px-4 text-lg rounded cursor-pointer hover:scale-95 duration-300"><span className="mr-2"><AiOutlineUser></AiOutlineUser></span>Login</button>
                    </div>
                    </div>
                    <p className="lg:hidden bg-[#525FE1] text-white py-3 text-xl px-3 rounded cursor-pointer hover:scale-95 duration-300"><HiBars3></HiBars3></p>
                 </div>
            </div>
        </div>
        </div>
        </Headroom>
    );
};

export default Navbar;