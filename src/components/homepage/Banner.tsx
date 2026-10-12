
import Image from "next/image";
import React from 'react';
import bannerImg from '../../assets/New folder/banner.png';


const Banner = () => {
    return (
        <div className='bg-blue-950 container mx-auto rounded-2xl flex gap-15 pt-8 pl-5 pr-1 pb-7'>
            
           
            <div >
                  <h3 className='text-amber-400'>workout library</h3>
                <h2 className='text-amber-400 font-bold text-5xl' >TRAIN WITH INTENT. LOG <br/> EVERY SET. </h2>   
                <h3 className='text-amber-400'>Fitlog is a dark, no-nonsence gym companion: pick a lift, look it into todays plan and watch the weeks<br/> work add up.</h3>
                <div><button className="btn btn-warning">BROWSE WORKOUTS</button></div>
            </div>
            <div className="pl-20">
                 <Image src={bannerImg} alt="Banner"/>
            </div>




        </div>
    );
};

export default Banner;