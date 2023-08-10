import Heading from "../../Component/Heading/Heading";
import testimonalImg from '../../../assets/img/testimonial-01.jpg'
import testimonalImg2 from '../../../assets/img/shape-02-01.png'
import testimonalImg3 from '../../../assets/img/quote.png'
import testimonalImg4 from '../../../assets/img/trophy.png'
import './Testimonal.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useEffect, useState } from "react";

const Testimonal = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('Review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:false
    };
    return (
        <div id='instructor' className="bg-gradient-to-r from-[#FEEBDD] to-[#EAE3F2] py-8">
            <div className="lg:px-20 md:px-12px px-8 py-8">
                <div>
                    <Heading
                        subtitle='TESTIMONIAL'
                        title='What Our Student Says'
                    ></Heading>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-20">
                    <div className="py-8 lg:mt-8 mt-2 relative hidden lg:block" >
                        <img className="w-full" src={testimonalImg} alt="" />
                        <img className="absolute mt-2 left-[-60px] hidden lg:block" src={testimonalImg2} alt="" />
                        <div className="absolute bg-white px-4 py-3 top-10 flex items-center lg:left-[-60px] left-0">
                            <img src={testimonalImg4} alt="" />
                            <div className="px-4 mt-4">
                                <p className="text-xl font-semibold">50K+</p>
                                <p className="text-[#424242d5] py-1">Satisfied Learners</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-40 mt-5">
                        <Slider {...settings}>
                            {
                              reviews.map((review,index) =><div key={review.index}>

                                <div>
                                    <img className="py-8" src={testimonalImg3} alt="" />
                                     <div className="px-2">
                                     <p className="text-xl font-meduim leading-relaxed">"{review.details}"</p>
                                     <div className="flex items-center py-8">
                                         <img src={review.image} alt="" />
                                         <div className="px-4">
                                             <h2 className="text-2xl font-semibold">{review.name}</h2>
                                             <p className="text-[#525FE1]">{review.position}</p>
                                         </div>
                                     </div>
                                     </div>
                                </div>

                              </div>)  
                            }
                            
                            
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonal;