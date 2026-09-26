import React from 'react';
import { iWorkout } from '@/types/worker.type';
import WorkerCard from '@/component/shared/WorkerCard';


const getWorkout = async () => {
    const response = await fetch(
        "https://api.api-store.workers.dev/api/fitlog"
    );

    const data = await response.json();

    return data;
};

const Worker = async () => {

    const workoutData = await getWorkout();

    console.log(workoutData);

    return (
        <section
            id="library"
            className="container mx-auto px-6 py-17.5"
        >

            <h2 className="text-3xl font-bold text-white">
                THE LIBRARY
            </h2>

            <p className="mt-2 text-sm text-gray-400">
                Twelve lifts covering every major muscle group.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {workoutData.map((workout:iWorkout,ind:number) => {
                    return (<WorkerCard
            key={ind}
            workout={workout}
        />
                    );
                })}

            </div>

        </section>
    );
};

export default Worker;