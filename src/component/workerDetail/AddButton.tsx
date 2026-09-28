"use client"
import { WorkerContext } from '@/context/WorkerContext';
import { iWorkout } from '@/types/worker.type';

import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const AddButton = ({workout}:{workout:iWorkout}) => {


    const { todaysPlan,setTodaysPlan}=useContext(WorkerContext)



    const handleTodaysPlan = () => {
        const alreadyAdded = todaysPlan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.error("Already added in your plan!");
            return;
        }

        console.log("Added to today's",workout);

        setTodaysPlan([...todaysPlan,workout])

        toast.success(`Added to today's plan`);

    };

    return  <button className="flex items-center gap-2 rounded-md bg-[#b6ff00] px-3 py-2 text-[8px] font-bold text-black"onClick={()=>handleTodaysPlan()}>
                                <span>▣</span>
                                Add to today&apos;s plan
                            </button>
};

export default AddButton;