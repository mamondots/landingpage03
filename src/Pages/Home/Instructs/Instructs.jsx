import { useEffect, useState } from "react";

import InstructsBox from "./InstructsBox/InstructsBox";


const Instructs = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('Instruct.json')
            .then(res => res.json())
            .then(data => {
                setMembers(data)

            })
    }, [])
    return (
        <div className="bg-[#525FE1]">
            <div className="lg:px-20 md:px-12px px-8 py-12">
                <div className="text-center text-white">
                    <p className="font-medium tracking-wider">TEAM MEMBER</p>
                    <h2 className="py-2 lg:text-4xl font-bold md:text-3xl text-2xl">Meet Our Instructor</h2>
                </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-8 md:gap-2 gap-1  space-y-4 lg:space-y-0 py-8">
                         {
                            members.map((member,index) =><InstructsBox
                            key={member.index}
                            member={member}
                            >

                            </InstructsBox>)
                         }
                    </div>
            </div>
        </div>
    );
};

export default Instructs;