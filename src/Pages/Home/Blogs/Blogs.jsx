import { useEffect, useState } from "react";
import Heading from "../../Component/Heading/Heading";
import { CiCalendarDate } from 'react-icons/ci';
import { AiOutlineUser } from 'react-icons/ai';
import { BiRightArrowAlt } from "react-icons/bi";


const Blogs = () => {
    const [bloges, setBloges] = useState([])
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => {
                setBloges(data)

            })
    }, [])
    return (
        <div id='blogs' className="bg-gradient-to-r from-[#FFECE5] to-[#FBF0EE]">
            <div className="lg:px-20 md:px-12px px-8 py-12">
                <div className="pt-8">
                    <Heading
                        subtitle='BLOG & NEWS'
                        title='Trending on Our Blogs'
                    >
                    </Heading>
                </div>
                <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 lg:space-y-0 space-y-2 py-8">
                    {
                        bloges.map((blog, index) => <div key={blog.index}>
                            <div className="bg-white px-8 py-4 group overflow-hidden">
                                <p className="font-medium text-[#525FE1]">{blog.category}</p>
                                <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold py-2">{blog.title}</h2>
                                <div className="lg:flex items-center lg:space-x-4 py-3 text-[#424242d5]">
                                    <p className="flex items-center"><CiCalendarDate></CiCalendarDate><span className="px-1">{blog.date}</span></p>
                                    <p className="flex items-center"><AiOutlineUser></AiOutlineUser><span className="px-1">Posted By {blog.name}</span></p>
                                </div>
                                <img className="group-hover:scale-105 duration-500 w-full" src={blog.image} alt="" />
                            </div>

                        </div>)
                    }
                   
                </div>
                <div className="text-center flex items-center justify-center">
                        <button className="common-btn">All Blogs <span className="ml-2 mt-1"><BiRightArrowAlt></BiRightArrowAlt></span></button>
                    </div>
            </div>
        </div>
    );
};

export default Blogs;