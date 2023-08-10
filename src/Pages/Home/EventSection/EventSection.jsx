import { useEffect, useState } from "react";
import Heading from "../../Component/Heading/Heading";
import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineUpdate } from 'react-icons/md';
import { BiMap, BiRightArrowAlt } from 'react-icons/bi';

const EventSection = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('Events.json')
            .then(res => res.json())
            .then(data => {
                setOffers(data)


            })
    }, [])

    return (
        <div id='event' className="bg-gradient-to-r from-[#FCE6DB] to-[#EFE7F4]">
            <div className="lg:px-20 md:px-12px px-8 py-12">
                <div className="py-4">
                    <Heading
                        subtitle='LET’S LEARN TOGETHER'
                        title='Upcoming Educational Events'
                    >

                    </Heading>

                    <div className="lg:space-y-4 py-12 mt-4 grid lg:grid-cols-1 md:grid-cols-3 gap-8">
                        {
                            offers.map((offer, index) => <div key={offer.index}>

                                <div className="lg:flex items-center justify-between bg-white px-4 py-4 rounded">
                                <div className="lg:flex items-center">
                                    <div>
                                        <img className="rounded w-full" src={offer.image} alt="" />
                                    </div>
                                    <div className="px-6">
                                        <h2 className="lg:text-2xl font-semibold py-2 hover:text-[#525FE1] duration-300 cursor-pointer">{offer.title}</h2>
                                        <div className="lg:flex lg:space-x-8 text-[#424242d5] text-base">
                                            <p className="flex items-center"><CiCalendarDate></CiCalendarDate><span className="px-2">{offer.date}</span></p>
                                            <p className="flex items-center"><MdOutlineUpdate></MdOutlineUpdate><span className="px-2">{offer.time}</span></p>
                                            <p className="flex items-center"><BiMap></BiMap><span className="px-2">{offer.address}</span></p>
                                        </div>

                                    </div>
                                </div>
                                 <div className="lg:py-0 py-4">
                                 <button className="flex items-center font-semibold lg:text-lg text-base px-6 py-4 rounded-lg  bg-[#231F40] text-white hover:bg-[#525FE1] duration-300 mr-10">Book A Seat <span className="ml-2 mt-1"><BiRightArrowAlt></BiRightArrowAlt></span></button>
                                 </div>
                                </div>

                            </div>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventSection;