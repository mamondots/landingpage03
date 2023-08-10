import aboutImg from '../../../assets/img/about-image-01.jpg'
import aboutImg2 from '../../../assets/img/about-image-02.jpg'
import aboutImg3 from '../../../assets/img/badge.png'
import './About.css'
import { AiOutlineRead } from 'react-icons/ai';
import { GiDamagedHouse } from 'react-icons/gi';
import { BiRightArrowAlt } from "react-icons/bi";
const About = () => {
    return (
        <div id='about' className="lg:px-20 md:px-12px px-8 py-8">
            <div className="py-12 grid lg:grid-cols-2 lg:gap-10">
                <div className='relative'>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='absolute right-0 mt-[-30vh] hidden lg:block '>
                        <img className='rounded-lg' src={aboutImg2} alt="" />
                    </div>
                    <div className='absolute top-12 left-[-65px] bg-[#b5a9a0cd] p-3 rounded-full hidden lg:block'>
                        <img src={aboutImg3} alt="" />
                    </div>
                </div>
                <div>
                    <p className='text-lg font-medium py-4 text-[#525FE1]'>ABOUT US</p>
                    <p className='lg:text-4xl md:text-3xl text-2xl  font-bold text-[#231F40] leading-10'>Creating A Community Of Life Long Learners</p>
                    <p className='my-8 leading-6 lineText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra.</p>
                    <div>
                        <div className='flex'>
                            <div >
                                <p className='px-3 py-3 rounded-full bg-[#F86F03] font-semibold text-2xl text-white'><AiOutlineRead></AiOutlineRead></p>
                            </div>
                            <div className='px-4 pt-2'>
                                <h2 className='text-xl font-bold'>Flexible Classes</h2>
                                <p className='py-2 leading-7 text-[#424242d5]'>It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <p className='px-3 py-3 rounded-full bg-[#F86F03] font-semibold text-2xl text-white'><GiDamagedHouse></GiDamagedHouse></p>
                            </div>
                            <div className='px-4 pt-2'>
                                <h2 className='text-xl font-bold'>Learn From Anywhere</h2>
                                <p className='py-2 leading-7 text-[#424242d5]'>It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                            </div>
                        </div>
                        <div className="py-8">
                    <button className="common-btn">Know About Us <span className="ml-2 mt-1"><BiRightArrowAlt></BiRightArrowAlt></span></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;