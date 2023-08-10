import { useEffect, useState } from "react";
import Heading from "../../Component/Heading/Heading";
import CoursesDetails from "./CoursesDetails/CoursesDetails";
import { BiRightArrowAlt } from "react-icons/bi";


const Courses = () => {
    const [books,setBooks] = useState([])
    useEffect(() =>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div id='courses' className="lg:px-20 md:px-12px px-8 py-8">
            <div className="pt-12">
                <Heading
                 subtitle='POPULAR COURSES'
                 title='Featured On This Month'
                >

                </Heading>

                <div className="py-10">
                <div className="py-2 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4 md:gap-2">
                        {
                            books.map((book,index) => <CoursesDetails
                            key={book.index}
                            book={book}
                            ></CoursesDetails>)
                        }
                </div>
                <div className="text-center flex items-center justify-center">
                    <button className="common-btn">All Categories <span className="ml-2 mt-1"><BiRightArrowAlt></BiRightArrowAlt></span></button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Courses;