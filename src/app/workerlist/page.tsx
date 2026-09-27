"use client"

import WorkerCard from '@/component/shared/WorkerCard';
import { WorkerContext } from '@/context/WorkerContext';
import { iWorkout } from '@/types/worker.type';
import React, { useContext } from 'react';

const WorkerList = () => {

    const { todaysPlan, saveLater } = useContext(WorkerContext)
    console.log(todaysPlan, saveLater, "todaysplan", "saver");

    return (

        <div className='container mx-auto py-15'>
            <h2 className='my-7 bg-amber-200 rounded-3xl py-16 font-bold text-4xl text-center'>listed worker</h2>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Today&apos;s Plan" />
                <div className="tab-content bg-base-100 border-base-300 p-6">{ todaysPlan.length >0? todaysPlan.map((workout:iWorkout)=>{
                    return<WorkerCard key={workout.id}workout={workout}/>
                })  : (<p className='text-center text-lg font-semibold'>
                    No Plan Found

                </p>)}</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">{saveLater.length >0?saveLater.map((workout:iWorkout)=>{
                    return<WorkerCard key={workout.id}workout={workout}/>
                }) : (<p className='text-center text-lg font-semibold'>
                    No Save Plan Found

                </p>)}</div>


            </div>
        </div>
    );
};

export default WorkerList;