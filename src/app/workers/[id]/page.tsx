import AddButton from "@/component/workerDetail/AddButton";
import SaveButton from "@/component/workerDetail/SaveButton";
import { iWorkout } from "@/types/worker.type";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface IWorkerDetailsprops {
    params: Promise<{
        id: string;
    }>;
}

const getWorkout = async (): Promise<iWorkout[]> => {
    const response = await fetch(
        "https://api.api-store.workers.dev/api/fitlog"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const data = await response.json();
    return data;
};

const WorkerDetailsPage = async ({
    params,
}: IWorkerDetailsprops) => {
    const { id } = await params;

    const workoutData = await getWorkout();

    const workout = workoutData.find(
        (workout: iWorkout) =>
            String(workout.id) === String(id)
    );

    if (!workout) {
        notFound();
    }

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

                        <h1 className="text-2xl font-extrabold uppercase">
                            {workout.name}
                        </h1>

                        <p className="mt-2 max-w-xl text-[10px] leading-4 text-gray-400">
                            {workout.description}
                        </p>

                        {/* MUSCLE GROUPS */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#b6ff00] px-3 py-1 text-[8px] font-bold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* WORKOUT INFORMATION */}
                        <div className="mt-4 overflow-hidden rounded-lg border border-gray-800 bg-[#15181e]">

                            {/* EQUIPMENT */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[9px] text-gray-500">
                                    Equipment
                                </span>

                                <span className="text-[9px] font-semibold text-white">
                                    {workout.equipment}
                                </span>
                            </div>

                            {/* DIFFICULTY */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[9px] text-gray-500">
                                    Difficulty
                                </span>

                                <span className="text-[9px] font-semibold text-white">
                                    {workout.difficulty}
                                </span>
                            </div>

                            {/* SETS */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[9px] text-gray-500">
                                    Sets
                                </span>

                                <span className="text-[9px] font-semibold text-white">
                                    {workout.sets}
                                </span>
                            </div>

                            {/* REPS */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[9px] text-gray-500">
                                    Reps
                                </span>

                                <span className="text-[9px] font-semibold text-white">
                                    {workout.reps}
                                </span>
                            </div>

                            {/* DURATION */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[9px] text-gray-500">
                                    Duration
                                </span>

                                <span className="text-[9px] font-semibold text-white">
                                    {workout.duration} min
                                </span>
                            </div>

                            {/* CALORIES */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[9px] text-gray-500">
                                    Calories
                                </span>

                                <span className="text-[9px] font-semibold text-white">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            {/* RATING */}
                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-[9px] text-gray-500">
                                    Rating
                                </span>

                                <span className="text-[9px] font-semibold text-white">
                                    ★ {workout.rating}
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
                        <div className="mt-5 flex flex-wrap gap-2">
                            <AddButton workout={workout} />
                            <SaveButton workout={workout} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkerDetailsPage;