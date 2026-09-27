"use client";

import React, { createContext, useState } from 'react';
import { iWorkout } from '@/types/worker.type';


interface IWorkerContext {
    todaysPlan: iWorkout[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<iWorkout[]>>;
    saveLater: iWorkout[];
    setSaveLater: React.Dispatch<React.SetStateAction<iWorkout[]>>;
}


export const WorkerContext = createContext<IWorkerContext>({
    todaysPlan: [],
    setTodaysPlan: () => {},
    saveLater: [],
    setSaveLater: () => {},
});

const WorkerProvider = ({ children }: { children: React.ReactNode }) => {

    const [todaysPlan, setTodaysPlan] = useState<iWorkout[]>([]);
    const [saveLater, setSaveLater] = useState<iWorkout[]>([]);

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        saveLater,
        setSaveLater,
    };

    return (
        <WorkerContext.Provider value={sharedData}>
            {children}
        </WorkerContext.Provider>
    );
};

export default WorkerProvider;