import { BiRightArrowAlt } from "react-icons/bi";
import bannerImg from '../../../assets/img/image-01.png'
import bannerImg2 from '../../../assets/img/image-02.png'
import bannerImg3 from '../../../assets/img/image-03.png'
import './Banner.css'
const Banner = () => {
    return (
        <div id='home' className="bg-gradient-to-r from-[#FDEFE4] to-[#E9E6F1]  w-full z-[-1]">
             <div className="lg:px-20 md:px-12px px-8 py-8">
             <div className="lg:pt-20 grid lg:grid-cols-2 lg:gap-20 py-12">
                <div className="lg:pt-20 pt-8">
                    <p className="text-[#525FE1] text-base py-2  font-medium tracking-wide">BETTER LEARNING FUTURE WITH US</p>
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#231F40] py-2 education">Education Is About Academic Excellence</h2>
                    <p className="font-medium text-lg text-[#80798B] py-4">Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet ipsum a, dapibus porta velit.</p>
                    <div className="py-8">
                    <button className="common-btn">Get Started Today <span className="ml-2 mt-1"><BiRightArrowAlt></BiRightArrowAlt></span></button>
                    </div>
                </div>
                <div className="relative lg:mt-[-12vh]">
                        <div className="absolute mt-5 hidden lg:block">
                        <img src={bannerImg3} alt="" />
                        </div>
                        <div className="absolute right-[-70px] top-0 hidden lg:block">
                        <img src={bannerImg2} alt="" />
                        </div>
                        <div className="lg:absolute lg:top-20 ">
                        <img src={bannerImg} alt="" />
                        </div>
                </div>
             </div>
        </div>
        </div>
    );
};

export default Banner;