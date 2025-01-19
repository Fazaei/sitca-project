
import './index.css'
import '../../../style.css'
import data from '../../assets/Landing/db/data.json'
import { useEffect, useState } from 'react';


const AddSkill1 = () => {
    return (

        <div>
            {
                data.skills.development.map((skill, index) => (

                    
                    <div className="w-full flex flex-col lg:mt-12 mt-5">

                        <div className="w-full flex justify-between lg:text-lg text-xs">
                            <span id="skillName">{skill.name}</span>
                            <span id="skillValue" className="text-gray-500">{skill.value}%</span>
                        </div>

                        <div className="mt-2 relative z-10">
                            <div style={{ background: "#6C63FF80"}} className="w-full rounded-full lg:h-2.5 h-1.5">
                                <div style={{ width: skill.value + "%"}}> <div id="progress" className={"skills-animation relative bg-gradient-to-r from-blue-700 from-10% to-purple-700 to-50% lg:h-2.5 h-1.5 rounded-full box-border"} style={{width:"0%",boxShadow: "100px" }}></div>
                                </div>
                                </div>
                        </div>
                    </div>

                    

                ))

            }

        </div>

    );
}


const AddSkill2 = () => {
    return (

        <>

            {
                data.skills.design.map((skill, index) => (


                    <div className="w-full flex flex-col lg:mt-12 mt-5">

                        <div className="w-full flex justify-between lg:text-lg text-xs">
                            <span id="skillName">{skill.name}</span>
                            <span id="skillValue" className="text-gray-500">{skill.value}%</span>
                        </div>

                        <div className="mt-2 relative z-10">
                            <div style={{ background: "#6C63FF80" }} className="w-full rounded-full lg:h-2.5 h-1.5">
                            <div style={{ width: skill.value + "%"}}><div id="progress" className="skills-animation relative bg-gradient-to-r from-blue-700 to-purple-700 lg:h-2.5 h-1.5 rounded-full box-border" style={{ width: "0px", boxShadow: "100px" }}></div></div>
                            </div>
                        </div>

                    </div>

                ))
            }

        </>

    );
}


export { AddSkill2 };
export default AddSkill1;