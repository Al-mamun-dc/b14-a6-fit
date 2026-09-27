"use client"

import { WorkerContext } from '@/context/WorkerContext';
import React, { useContext } from 'react';

const WorkerList = () => {

    const {todaysPlan,saveLater}=useContext(WorkerContext)
    console.log(todaysPlan,saveLater,"todaysplan","saver");
    
    return (
        <div>
            listed bboks
        </div>
    );
};

export default WorkerList;