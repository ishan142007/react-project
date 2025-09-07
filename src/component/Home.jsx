import React, { useState } from "react";
import './file.css';
import {motion,useScroll} from 'framer-motion';
import { animate } from "framer-motion/dom";

// import Card from './Data';


function Home({url,url2,url3}){
    // let list=document.querySelectorAll(".ani");
    let list=[
        "https://educationsite-three.vercel.app/assets/8-DZ1QSHK9.png",
        "https://educationsite-three.vercel.app/assets/9-CwlI4jBK.png",
        "https://educationsite-three.vercel.app/assets/fleg1-BicyKCV0.png",
        "https://educationsite-three.vercel.app/assets/flegs2-D3bNWwwd.png",
        "https://educationsite-three.vercel.app/assets/3-BFs7xKsG.png",
        "https://educationsite-three.vercel.app/assets/4-KXCRXRvQ.png",
        "https://educationsite-three.vercel.app/assets/5-qdxULm4o.png",
        "https://educationsite-three.vercel.app/assets/6-BHZth-GH.png",
        "https://educationsite-three.vercel.app/assets/7-PlP78vLv.png"
    ]
    
    console.log(list);
   
    const [position,setposition]=useState("0");
   
    const scrollYProgress=useScroll().scrollYProgress
    return(
        <>
        <div className=" w-full h-max flex justify-center items-center bg-green-100 ">
            <div className="w-max h-max rounded-4xl shadow-2xl bg-white m-10 transition duration-300 "> 

            <section className="w-full h-30 flex">
                <div className="w-[30%] h-max p-2"><img src={url} alt="logo" className="w-30 h-20 m-4 rounded-4xl"/></div>
                <div className="w-[70%] h-30 flex  gap-4 items-end justify-center p-5 text-green-700 font-semibold">
                        <button className="">About Us</button>
                        <button className="">Our Service</button>
                        <button className="">Study Destination</button>
                        <button className="">Latest Blogs</button>
                        <button className="">Contact Us</button>
                        <button className="bg-green-500 p-1 rounded">Free Consultation</button>
                        </div>
            </section>
            <section className="text-center flex  mt-3 p-3 bg-green-100 px-15">
                <div className="w-[20%]  h-70 flex items-end">
                        <img src={url2} alt="" className=" h-20 m-5 animate-bounce" />
                </div>
                <div className="w-[70%]  flex flex-col justify-center items-center">

                <div className="w-[100%]  text-5xl ">
                    Study Aboard can be <br />simpler <p className="text-green-500">than you think</p>
                      
                </div>
                <div className="w-[40%] mt-5">Simplyfying global education with trusted guidance for over 24 years </div>
                <div className="w-40 "> <button className=" bg-green-500 rounded text-white shadow-lg  shadow-green-700 hover:bg-green-900 hover:scale-102 p-2 ">Take the First step</button></div>
                <div>

                </div>
                </div>
                <div className="w-[20%]  h-70 p-5">
                    <img src={url3} alt="" className="h-19 animate-bounce"/>
                </div>
            </section>
            <section className="w-full mt-8 px-15">
              <section>
            <div className=" flex w-full h-70  rounded-2xl justify-between text-center ">

            <div className="w-50  pt-5 rounded-2xl  hover:scale-101 transform hover:shadow-2xl shadow-gray-400 duration-500">
                <div className="m-8"><b className="text-3xl text-green-900">12000+</b><br/>Students  </div>
            <div className="m-8"><b className="text-3xl text-green-900">4.8/5</b> <br />Ratings</div>
            </div>
            <div className="w-50  pt-5 rounded-2xl hover:scale-101 transform hover:shadow-2xl shadow-gray-400 duration-500">
                <div className="m-8"><b className="text-3xl text-green-900">24+</b><br />Years of Experience</div>
            <div className="m-8"><b className="text-3xl text-green-900">95%</b> <br />Visa Success Rate</div>
            </div>
            <div className="w-50  pt-5 rounded-2xl hover:scale-101 transform hover:shadow-2xl shadow-gray-400 duration-500">
                <div className="m-8"><b className="text-3xl text-green-900">15+</b><br />Countries</div>
            <div className="m-8"><b className="text-3xl text-green-900">850+</b> <br />University Representation</div>
            </div>
            </div>
        </section>
            <motion.div className="w-full h-3 fixed bg-green-700 top-0 left-0 origin-left"
            style={{
                scaleX:scrollYProgress
            }}
            
            >

            </motion.div>
        
            </section>
            <section className="px-15">
                <div className="flex-col justify-center ">
                    <div className="text-center text-2xl">
                        <h1>Global Study <b className="text-green-600">Destinations</b></h1>
                        <h1 className="text-green-600 text-5xl mt-[-30px]">____</h1>
                    </div>
                <motion.div className="flex gap-0.5 mt-9 w-full h-40">
                    {/* animation are to be given  */}
                
                    <div className="ani"><img src="https://educationsite-three.vercel.app/assets/8-DZ1QSHK9.png" alt="" /></div>
                    <div className="ani"><img src="https://educationsite-three.vercel.app/assets/9-CwlI4jBK.png" alt="" /></div>
                    <div className="ani"><img src="https://educationsite-three.vercel.app/assets/fleg1-BicyKCV0.png" alt="" /></div>
                    <div className="ani"><img src="https://educationsite-three.vercel.app/assets/flegs2-D3bNWwwd.png" alt="" /></div>
                    <div className="ani"><img src="https://educationsite-three.vercel.app/assets/3-BFs7xKsG.png" alt="" /></div>
                    <div className="ani"><img src="https://educationsite-three.vercel.app/assets/4-KXCRXRvQ.png" alt="" /></div>
                    <div className="ani"><img src="https://educationsite-three.vercel.app/assets/5-qdxULm4o.png" alt="" /></div>
                    <div className="ani"><img src="https://educationsite-three.vercel.app/assets/6-BHZth-GH.png" alt="" /></div>
                    <div className="ani"><img src="https://educationsite-three.vercel.app/assets/7-PlP78vLv.png" alt="" /></div>
                </motion.div>
                </div>
                  <div className="flex-col justify-center mt-10 w-full ">
                    <div className="text-center text-2xl h-20">
                        <h1> <b className="text-green-600">Universites </b>our Students got Admissions from</h1>
                        <h1 className="text-green-600 text-5xl mt-[-30px]">____</h1>
                    </div>
                <motion.div className="flex gap-0.5 mt-9 h-20">
                    {/* animation are to be given  */}
                
                    <div className="ani"><img src="" alt="" /></div>
                    <div className="ani"><img src="" alt="" /></div>
                    <div className="ani"><img src="" alt="" /></div>
                    <div className="ani"><img src="" alt="" /></div>
                    <div className="ani"><img src="" alt="" /></div>
                    <div className="ani"><img src="" alt="" /></div>
                    <div className="ani"><img src="" alt="" /></div>
                    <div className="ani"><img src="" alt="" /></div>
                    <div className="ani"><img src="" alt="" /></div>
                </motion.div>
                <div className="text-gray-400 text-center h-10 "><i>...and many more</i></div>
                </div>
            </section>
            <section className="mt-20 px-15">
                <div className="text-center text-2xl h-20">
                        <h1> Admission <b className="text-green-600">Open</b></h1>
                        <h1 className="text-green-600 text-5xl mt-[-30px]">____</h1>
                    </div>
                <div className="flex gap-20 justify-center w-full h-max mb-5 ">
                   <div className="w-[30%] h-[90%]  rounded-xl  bg-green-100 hover:shadow-sm hover:shadow-green-300">
                    <img src="https://educationsite-three.vercel.app/assets/Undergraduate%20Admissions-BRQwNMS8.png" alt="" />
                    <p className="mx-5  py-2 ">
                        <h1 className="font-bold text-xl">Undergraduate Admissions</h1>
                        <span className="text-gray-500 font-semiboldbold" >Start strong with world-class Bachelor’s programs abroad.
                            </span >
                            </p>
                            </div>


                   <div className="w-[30%] h-[90%]  rounded-xl  bg-green-100 hover:shadow-sm hover:shadow-green-300">
                    <img src="https://educationsite-three.vercel.app/assets/Postgraduate%20Admissions-CZXcxuix.png" alt="" />
                    <p className="mx-5  py-2 ">
                        <h1 className="font-bold text-xl">Postgraduate Admissions</h1>
                        <span className="text-gray-500 font-semiboldbold" >Master your future with specialized global programs.
                            </span >
                    </p>
                    </div>
                   
                   
                   <div className="w-[30%] h-[90%]  rounded-xl  bg-green-100 hover:shadow-sm hover:shadow-green-300">
                    <img src="https://educationsite-three.vercel.app/assets/MBA%20Admissions-FJOnvt5X.png" alt="" />
                      <p className="mx-5  py-2 ">
                      <h1 className="font-bold text-xl">MBA Admissions</h1>
                        <span className="text-gray-500 font-semiboldbold" >Advance your career with top-ranked global business schools.
                            </span >
                            </p>
                    </div>
                </div>
            </section>
            <section className="bg-black">
                <div className="w-full h-80 border ">
                  
                </div>
            </section>
            </div>
        </div>
        </>
    )
}
export default Home