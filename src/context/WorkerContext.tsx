"use client";

import React, { createContext, useState } from 'react';
 export const WorkerContext=createContext({})
const WorkerProvider = ({children}:{children:React.ReactNode}) => {
    const[todaysPlan,setTodaysPlan]=useState([]);
    const[saveLater,setSaveLater]=useState([]);


     const sharedData={
        todaysPlan,
        setTodaysPlan,
        saveLater,
        setSaveLater,
     };
    return < WorkerContext.Provider value={sharedData}>{children}</WorkerContext.Provider>
};

export default WorkerProvider;