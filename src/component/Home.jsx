import React from "react";
import './file.css';
// import Card from './Data';

function Home({url,url2,url3}){
    return(
        <>
        <div className=" w-full h-max flex justify-center items-center bg-green-100 ">
            <div className="w-max h-max rounded-4xl shadow-2xl bg-white hover:scale-101 transition duration-300 p-15"> 

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
            <section className="text-center flex  mt-3 p-3 bg-green-100">
                <div className="w-[20%]  h-70 flex items-end">
                        <img src={url2} alt="" className=" h-20 m-5 animate-bounce" />
                </div>
                <div className="w-[70%]  flex flex-col justify-center items-center">

                <div className="w-[100%]  text-5xl ">
                    Study Aboard can be <br />simpler <p className="text-green-500">than you think</p>
                      
                </div>
                <div className="w-[40%] mt-5">Simplyfying global education with trusted guidance for over 24 years </div>
                <div className="w-40 "> <button className=" bg-green-500 rounded text-white  shadow-2xl shadow-green-700 hover:bg-green-900 hover:scale-102 p-2 ">Take the First step</button></div>
                </div>
                <div className="w-[20%]  h-70 p-5">
                    <img src={url3} alt="" className="h-19 animate-bounce"/>
                </div>
            </section>
            <section className="w-full mt-8 ">
              <section>
            <div className=" flex w-full h-50  rounded-2xl justify-between text-center ">

            <div className="w-50  m-5 rounded-2xl  hover:scale-101 transform hover:shadow-2xl shadow-emerald-950 duration-500">12000+ <br />students</div>
            <div className="w-50  m-5 rounded-2xl hover:scale-101 transform hover:shadow-2xl shadow-emerald-950 duration-500">24+ <br />Years of experience</div>
            <div className="w-50  m-5 rounded-2xl hover:scale-101 transform hover:shadow-2xl shadow-emerald-950 duration-500">15+ <br />countries</div>
            </div>
            <div className=" flex w-full h-50 rounded-2xl justify-between text-center ">

           <div className="w-50 m-5 rounded-2xl hover:scale-101 transform hover:shadow-2xl shadow-emerald-950 duration-500">4.8/5 <br />Ratings</div>
            <div className="w-50  m-5 rounded-2xl hover:scale-101 transform hover:shadow-2xl shadow-emerald-950 duration-500">95% <br />Visa Success Rate</div>
            <div className="w-50  m-5 rounded-2xl hover:scale-101 transform hover:shadow-2xl shadow-emerald-950 duration-500">850+ <br />University Representation</div>
            </div>
        </section>
            </section>
            </div>
        </div>
        </>
    )
}
export default Home