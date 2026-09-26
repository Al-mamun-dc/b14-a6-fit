"use client"
import React from 'react';


const AddButton = () => {

     const handleTodaysPlan = () => {
        console.log("Added to today's plan");
    };
    return  <button className="flex items-center gap-2 rounded-md bg-[#b6ff00] px-3 py-2 text-[8px] font-bold text-black"onClick={()=>handleTodaysPlan()}>
                                <span>▣</span>
                                Add to today&apos;s plan
                            </button>
};

export default AddButton;