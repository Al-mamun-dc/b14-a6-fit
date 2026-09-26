import AddButton from '@/component/workerDetail/AddButton';
import { iWorkout } from '@/types/worker.type';
import Image from 'next/image';
import React from 'react';

interface IWorkerDetailsprops {
    params: Promise<{
        id: string;
    }>;
}

const getWorkout = async (): Promise<iWorkout[]> => {
    const response = await fetch(
        "https://api.api-store.workers.dev/api/fitlog"
    );

    const data = await response.json();

    return data;
};

const WorkerDetailsPage = async ({
    params
}: IWorkerDetailsprops) => {

    const { id } = await params;

    const workoutData = await getWorkout();

    const workout = workoutData.find(
        (workout: iWorkout) => workout.id === Number(id)
    ) as iWorkout;

    return (
        <div className="min-h-screen bg-[#0b0d10] px-6 py-10">

            <div className="container mx-auto">

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.05fr]">

                    {/* LEFT SIDE */}
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={700}
                            height={700}
                            className="h-full min-h-125 w-full object-cover"
                        />
                    </div>


                    {/* RIGHT SIDE */}
                    <div className="text-white">

                        {/* TITLE */}
                        <h1 className="text-2xl font-extrabold uppercase">
                            {workout.name}
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-2 max-w-xl text-[10px] leading-4 text-gray-400">
                            {workout.description}
                        </p>


                        {/* BADGES */}
                        <div className="mt-3 flex gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#b6ff00] px-3 py-1 text-[8px] font-bold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>


                        {/* SPECS */}
                        <div className="mt-4 overflow-hidden rounded-lg border border-gray-800 bg-[#15181e]">

                            <div className="grid grid-cols-2 border-b border-gray-800 px-4 py-2">
                                <span className="text-[7px] text-gray-500">
                                    EQUIPMENT
                                </span>
                                <span className="text-right text-[8px] text-gray-300">
                                    {workout.equipment}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800 px-4 py-2">
                                <span className="text-[7px] text-gray-500">
                                    DIFFICULTY
                                </span>
                                <span className="text-right text-[8px] text-gray-300">
                                    {workout.difficulty}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800 px-4 py-2">
                                <span className="text-[7px] text-gray-500">
                                    SETS
                                </span>
                                <span className="text-right text-[8px] text-gray-300">
                                    {workout.sets}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800 px-4 py-2">
                                <span className="text-[7px] text-gray-500">
                                    REPS
                                </span>
                                <span className="text-right text-[8px] text-gray-300">
                                    {workout.reps}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800 px-4 py-2">
                                <span className="text-[7px] text-gray-500">
                                    DURATION
                                </span>
                                <span className="text-right text-[8px] text-gray-300">
                                    {workout.duration} min
                                </span>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800 px-4 py-2">
                                <span className="text-[7px] text-gray-500">
                                    CALORIES
                                </span>
                                <span className="text-right text-[8px] text-gray-300">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="grid grid-cols-2 px-4 py-2">
                                <span className="text-[7px] text-gray-500">
                                    RATING
                                </span>
                                <span className="text-right text-[8px] text-gray-300">
                                    {workout.rating}
                                </span>
                            </div>

                        </div>


                        {/* INSTRUCTIONS */}
                        <div className="mt-4">

                            <h2 className="text-[10px] font-bold">
                                INSTRUCTIONS
                            </h2>

                            <ol className="mt-2 space-y-2">
                                {workout.instructions.map(
                                    (instruction, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-2 text-[8px] leading-4 text-gray-400"
                                        >
                                            <span className="text-gray-500">
                                                {index + 1}.
                                            </span>

                                            <span>
                                                {instruction}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ol>

                        </div>


                        {/* BUTTONS */}
                        <div className="mt-5 flex gap-2">

                           <AddButton/>

                            <button className="flex items-center gap-2 rounded-md border border-gray-700 px-3 py-2 text-[8px] text-gray-300">
                                <span>□</span>
                                Save for later
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default WorkerDetailsPage;