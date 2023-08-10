import { AiFillStar, AiOutlineUserSwitch } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { BiStopwatch } from "react-icons/bi";

const CoursesDetails = ({ book }) => {
    const { name, title, image, teacherImg, rating, totalStudents, totalLessons, amount, totalHours } = book
    return (
        <div className=" px-4 cursor-pointer group">
            <div className="relative overflow-hidden">
                <img className="w-full rounded duration-300  group-hover:scale-110" src={image} alt="" />
                <p className="flex items-center absolute top-2 bg-[#F86F03] px-2 py-1 text-white font-medium rounded-r"><span className="px-1"><BiStopwatch></BiStopwatch></span>{totalHours} Hours</p>
            </div>
            <div className="py-4 mt-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img className="w-[12%] rounded-full" src={teacherImg} alt="" />
                        <p className="text-base font-medium px-3 hover:text-[#525FE1] duration-300">{name}</p>
                    </div>
                    <div>
                        <p className="flex items-center text-[#757474]"><span className="px-2 text-[#FFA41B] font-medium text-lg"><AiFillStar></AiFillStar></span>({rating})</p>
                    </div>
                </div>

                <h2 className="text-xl font-medium py-4 hover:text-[#525FE1] duration-300">{title}</h2>
                <div className="flex justify-between items-center ">
                    <p className="flex items-center text-[#757474]"><span className="px-1"><AiOutlineUserSwitch></AiOutlineUserSwitch></span> {totalStudents} Students</p>
                    <p className="flex items-center text-[#757474] lg:mr-4"><span className="px-1"><MdOutlineContactPage></MdOutlineContactPage></span>{totalLessons} Lessons</p>
                </div>
                <div className="py-4 mt-2">
                    <button className="px-4 py-1  hover:bg-[#231F40] duration-300 rounded bg-[#525FE1] font-bold text-white">${amount} USD</button>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;