
"use client"

import { WorkerContext } from '@/context/WorkerContext';
import { iWorkout } from '@/types/worker.type';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WorkerList = () => {

    const {
        todaysPlan,
        setTodaysPlan,
        saveLater,
        setSaveLater
    } = useContext(WorkerContext);

    const totalExercises = todaysPlan.length;

    const totalMinutes = todaysPlan.reduce((total, workout) => {
        return total + workout.duration;
    }, 0);

    const totalCalories = todaysPlan.reduce((total, workout) => {
        return total + workout.caloriesBurned;
    }, 0);

    const removeWorkout = (id: number, type: string) => {
        if (type === "today") {
            setTodaysPlan(todaysPlan.filter((workout) => workout.id !== id));
        } else {
            setSaveLater(saveLater.filter((workout) => workout.id !== id));
        }
    };

    const renderWorkout = (workout: iWorkout, type: string) => {

        return (
            <div
                key={workout.id}
                className="flex flex-col md:flex-row items-center gap-4 bg-[#15171f] border border-gray-800 rounded-xl p-4 mb-3"
            >

                {/* Image */}
                <div className="w-full md:w-36 h-24 shrink-0">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={140}
                        height={100}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Workout Details */}
                <div className="flex-1 w-full">

                    <h3 className="text-white font-bold text-sm uppercase">
                        {workout.name}
                    </h3>

                    <p className="text-gray-400 text-xs mt-1">
                        {workout.muscleGroups.join(", ")}
                    </p>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-3">

                        <span>◷ {workout.duration} min</span>

                        <span>🔥 {workout.caloriesBurned} cal</span>

                        <span>▤ {workout.sets} sets</span>

                        <span>↗ {workout.reps} reps</span>

                    </div>

                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2 shrink-0">

                    <Link
                        href={`/workers/${workout.id}`}
                        className="btn btn-xs rounded-full bg-[#20232d] border-gray-700 text-white"
                    >
                        View Details
                    </Link>

                    {type === "today" && (
                        <button
                            onClick={() => removeWorkout(workout.id, "today")}
                            className="btn btn-xs rounded-full bg-lime-400 text-black border-none"
                        >
                            ✔ Mark as Done
                        </button>
                    )}

                    <button
                        onClick={() => removeWorkout(workout.id, type)}
                        className="text-gray-400 hover:text-red-400 px-2"
                    >
                        ✕
                    </button>

                </div>

            </div>
        );
    };

    return (

        <div className="min-h-screen bg-[#0e0f14] text-white">

            <div className="container mx-auto px-6 py-10">

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold">MY PLAN</h2>

                    <p className="text-xs text-gray-500 mt-2">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 rounded-xl border border-gray-800 bg-[#14161f] p-5 mb-5">

                    <div>
                        <p className="text-xs text-gray-400">Exercises</p>
                        <h2 className="text-2xl font-bold text-lime-400 mt-1">
                            {totalExercises}
                        </h2>
                    </div>

                    <div className="border-l border-gray-800 pl-5">
                        <p className="text-xs text-gray-400">Minutes</p>
                        <h2 className="text-2xl font-bold mt-1">
                            {totalMinutes}
                        </h2>
                    </div>

                    <div className="border-l border-gray-800 pl-5">
                        <p className="text-xs text-gray-400">Calories</p>
                        <h2 className="text-2xl font-bold mt-1">
                            {totalCalories}
                        </h2>
                    </div>

                </div>

                {/* Tabs */}
                <div className="tabs tabs-box bg-transparent mb-4">

                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab text-gray-400"
                        aria-label="Today's Plan"
                        defaultChecked
                    />

                    <div className="tab-content w-full pt-4">

                        {todaysPlan.length > 0 ? (
                            todaysPlan.map((workout: iWorkout) =>
                                renderWorkout(workout, "today")
                            )
                        ) : (
                            <div className="border border-gray-800 rounded-xl min-h-62.5 flex flex-col items-center justify-center text-center">

                                <h3 className="text-lg font-bold">
                                    NOTHING HERE YET
                                </h3>

                                <p className="text-xs text-gray-400 mt-2">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link
                                    href="/workers"
                                    className="btn btn-sm rounded-full bg-lime-400 text-black border-none mt-5"
                                >
                                    Go to workouts
                                </Link>

                            </div>
                        )}

                    </div>

                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab text-gray-400"
                        aria-label="Saved"
                    />

                    <div className="tab-content w-full pt-4">

                        {saveLater.length > 0 ? (
                            saveLater.map((workout: iWorkout) =>
                                renderWorkout(workout, "saved")
                            )
                        ) : (
                            <div className="border border-gray-800 rounded-xl min-h-62.5 flex flex-col items-center justify-center text-center">

                                <h3 className="text-lg font-bold">
                                    NOTHING HERE YET
                                </h3>

                                <p className="text-xs text-gray-400 mt-2">
                                    Browse the library and save a workout for later.
                                </p>

                                <Link
                                    href="/workers"
                                    className="btn btn-sm rounded-full bg-lime-400 text-black border-none mt-5"
                                >
                                    Go to workouts
                                </Link>

                            </div>
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default WorkerList;