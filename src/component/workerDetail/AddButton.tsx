"use client"
import { WorkerContext } from '@/context/WorkerContext';
import { iWorkout } from '@/types/worker.type';

import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const AddButton = ({workout}:{workout:iWorkout}) => {


    const { todaysPlan,setTodaysPlan}=useContext(WorkerContext)
  
    
    

     const handleTodaysPlan = () => {
        console.log("Added to today's",workout);
      
        setTodaysPlan([...todaysPlan,workout])

        toast.success(`you have add "${workout.name}"`);
        
    };
    return  <button className="flex items-center gap-2 rounded-md bg-[#b6ff00] px-3 py-2 text-[8px] font-bold text-black"onClick={()=>handleTodaysPlan()}>
                                <span>▣</span>
                                Add to today&apos;s plan
                            </button>
};

export default AddButton;