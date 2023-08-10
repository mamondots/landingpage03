import aboutImg from '../../../assets/img/about01.jpg'
import aboutImg2 from '../../../assets/img/about02.jpg'

import { AiOutlineRead } from 'react-icons/ai';
import { GiDamagedHouse } from 'react-icons/gi';


const Offering = () => {
    return (
        <div className="lg:px-20 md:px-12px px-8 py-8">
            <div className="py-12 grid lg:grid-cols-2 lg:gap-10">
                <div className='relative'>
                    <div>
                        <img className='lg:w-auto w-full' src={aboutImg} alt="" />
                    </div>
                    <div className='absolute right-0  top-20 hidden lg:block '>
                        <img className='rounded-lg' src={aboutImg2} alt="" />
                    </div>
                    
                </div>
                <div>
                    <p className='text-lg font-medium py-4 text-[#525FE1]'>WHY CHOOSE US</p>
                    <p className='lg:text-4xl md:text-3xl text-2xl  font-bold text-[#231F40] leading-10'>Knowledge is power, Information is liberating.</p>
                    <p className='my-8 leading-6 lineText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra.</p>
                    <div>
                        <div className='flex'>
                            <div >
                                <p className='px-3 py-3 rounded-full bg-[#F86F03] font-semibold text-2xl text-white'><AiOutlineRead></AiOutlineRead></p>
                            </div>
                            <div className='px-4 pt-2'>
                                <h2 className='text-xl font-semibold'>Industry Expert Instructor</h2>
                                <p className='py-2 leading-7 text-[#424242d5]'>It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <p className='px-3 py-3 rounded-full bg-[#F86F03] font-semibold text-2xl text-white'><GiDamagedHouse></GiDamagedHouse></p>
                            </div>
                            <div className='px-4 pt-2'>
                                <h2 className='text-xl font-semibold'>Up-to-Date Course Content</h2>
                                <p className='py-2 leading-7 text-[#424242d5]'>It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div>
                                <p className='px-3 py-3 rounded-full bg-[#F86F03] font-semibold text-2xl text-white'><GiDamagedHouse></GiDamagedHouse></p>
                            </div>
                            <div className='px-4 pt-2'>
                                <h2 className='text-xl font-semibold'>Biggest Student Community</h2>
                                <p className='py-2 leading-7 text-[#424242d5]'>It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offering;