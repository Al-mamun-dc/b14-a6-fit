"use client"
import { WorkerContext } from '@/context/WorkerContext';
import { iWorkout } from '@/types/worker.type';

import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const SaveButton = ({workout}:{workout:iWorkout}) => {


    const {  saveLater,setSaveLater,}=useContext(WorkerContext)
  
    
    

     const handleSaveLater = () => {
        console.log("Added to today's",workout);
      
        setSaveLater([...saveLater,workout])

        toast.success(`Added to saved `);
        
    };
    return  <button className="flex items-center gap-2 rounded-md bg-[#b6ff00] px-3 py-2 text-[8px] font-bold text-black"onClick={()=>handleSaveLater()}>
                               <span>□</span>
                                Save for later
                            </button>
};

export default SaveButton;