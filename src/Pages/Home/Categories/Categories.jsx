import './Categories.css'
import categoryImg01 from '../../../assets/img/category-01.jpg'
import categoryImg02 from '../../../assets/img/category-02.jpg'
import categoryImg03 from '../../../assets/img/category-03.jpg'
import categoryImg04 from '../../../assets/img/category-04.jpg'
import Heading from '../../Component/Heading/Heading'
import { BiRightArrowAlt } from 'react-icons/bi'


const Categories = () => {
    return (
        <div className='bg-gradient-to-r from-[#FEE8DA] to-[#F6EDF2]'>
            <div className='lg:px-20 md:px-12px px-8 py-8'>
                <div className='pt-8'>
                    <Heading
                        subtitle='COURSE CATEGORIES'
                        title='Popular Topics To Learn'
                    ></Heading>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-6 md:gap-4 gap-2 py-12'>
                    <div className='bg-white rounded-lg categy-box'>
                        <img className='rounded-t-lg w-full' src={categoryImg01} alt="" />
                        <div className='py-4 px-6 text-center'>
                            <p className='text-[#525FE1] text-lg'>23 Courses</p>
                            <h2 className='text-lg font-semibold py-2'>Front End Development</h2>
                            <p className='text-[#424242d5] pb-4 py-4'>Lorem Ipsum is simply for this dummy text of the printing.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg categy-box'>
                        <img className='rounded-t-lg w-full' src={categoryImg02} alt="" />
                        <div className='py-4 px-6 text-center'>
                        <p className='text-[#525FE1] text-lg'>18 Courses</p>
                        <h2 className='text-lg font-semibold py-2'>Back End Development</h2>
                        <p className='text-[#424242d5] pb-4 py-4'>Lorem Ipsum is simply for this dummy text of the printing.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg categy-box'>
                        <img className='rounded-t-lg w-full' src={categoryImg03} alt="" />
                       <div className='py-4 px-6 text-center'>
                       <p className='text-[#525FE1] text-lg'>18 Courses</p>
                        <h2 className='text-lg font-semibold py-2'>Full Stack Development</h2>
                        <p className='text-[#424242d5] pb-4 py-4'>Lorem Ipsum is simply for this dummy text of the printing.</p>
                       </div>
                    </div>
                    <div className='bg-white rounded-lg categy-box'>
                        <img className='rounded-t-lg w-full' src={categoryImg04} alt="" />
                        <div className='py-4 px-6 text-center'>
                        <p className='text-[#525FE1] text-lg'>12 Courses</p>
                        <h2 className='text-lg font-semibold py-2'>UI/UL Web Design</h2>
                        <p className='text-[#424242d5] pb-4 py-4'>Lorem Ipsum is simply for this dummy text of the printing.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center flex items-center justify-center">
                    <button className="common-btn">All Categories <span className="ml-2 mt-1"><BiRightArrowAlt></BiRightArrowAlt></span></button>
                    </div>
            </div>
        </div>
    );
};

export default Categories;