"use client";

import { WorkerContext } from "@/context/WorkerContext";
import { iWorkout } from "@/types/worker.type";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const WorkerList = () => {
    const {
        todaysPlan,
        setTodaysPlan,
        saveLater,
        setSaveLater,
    } = useContext(WorkerContext);

    // =========================
    // State
    // =========================

    const [sortBy, setSortBy] = useState("duration");

    const [activeTab, setActiveTab] = useState<
        "today" | "saved"
    >("today");

    // =========================
    // Stats
    // =========================

    const totalExercises = todaysPlan.length;

    const totalMinutes = todaysPlan.reduce(
        (total, workout) => {
            return total + Number(workout.duration);
        },
        0
    );

    const totalCalories = todaysPlan.reduce(
        (total, workout) => {
            return total + Number(workout.caloriesBurned);
        },
        0
    );

    // =========================
    // Sort Workouts
    // =========================

    const sortWorkouts = (workouts: iWorkout[]) => {
        const sortedWorkouts = [...workouts];

        sortedWorkouts.sort((a, b) => {
            // Duration
            if (sortBy === "duration") {
                return (
                    Number(a.duration) -
                    Number(b.duration)
                );
            }

            // Calories
            if (sortBy === "calories") {
                return (
                    Number(a.caloriesBurned) -
                    Number(b.caloriesBurned)
                );
            }

            // Sets
            if (sortBy === "sets") {
                return (
                    Number(a.sets) -
                    Number(b.sets)
                );
            }

            // Reps
            if (sortBy === "reps") {
                const repsA = parseInt(
                    String(a.reps).match(/\d+/)?.[0] || "0"
                );

                const repsB = parseInt(
                    String(b.reps).match(/\d+/)?.[0] || "0"
                );

                return repsA - repsB;
            }

            return 0;
        });

        return sortedWorkouts;
    };

    // =========================
    // Remove Workout
    // =========================

    const removeWorkout = (
        id: number,
        type: "today" | "saved"
    ) => {
        if (type === "today") {
            setTodaysPlan(
                todaysPlan.filter(
                    (workout) => workout.id !== id
                )
            );
        } else {
            setSaveLater(
                saveLater.filter(
                    (workout) => workout.id !== id
                )
            );
        }
    };

    // =========================
    // Render Workout
    // =========================

    const renderWorkout = (
        workout: iWorkout,
        type: "today" | "saved",
        index: number
    ) => {
        return (
            <div
                key={`${type}-${workout.id}-${index}`}
                className="mb-3 flex flex-col items-center gap-4 rounded-xl border border-gray-800 bg-[#15171f] p-4 md:flex-row"
            >
                {/* Image */}
                <div className="h-24 w-full shrink-0 md:w-36">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={140}
                        height={100}
                        className="h-full w-full rounded-lg object-cover"
                    />
                </div>

                {/* Workout Details */}
                <div className="w-full flex-1">
                    <h3 className="text-sm font-bold uppercase text-white">
                        {workout.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                        {workout.muscleGroups.join(", ")}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-400">
                        <span>
                            ◷ {workout.duration} min
                        </span>

                        <span>
                            🔥 {workout.caloriesBurned} cal
                        </span>

                        <span>
                            ▤ {workout.sets} sets
                        </span>

                        <span>
                            ↗ {workout.reps} reps
                        </span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex shrink-0 items-center gap-2">
                    <Link
                        href={`/workers/${workout.id}`}
                        className="btn btn-xs rounded-full border-gray-700 bg-[#20232d] text-white"
                    >
                        View Details
                    </Link>

                    {/* Mark as Done */}
                    {type === "today" && (
                        <button
                            onClick={() =>
                                removeWorkout(
                                    workout.id,
                                    "today"
                                )
                            }
                            className="btn btn-xs rounded-full border-none bg-lime-400 text-black"
                        >
                            ✔ Mark as Done
                        </button>
                    )}

                    {/* Remove */}
                    <button
                        onClick={() =>
                            removeWorkout(
                                workout.id,
                                type
                            )
                        }
                        className="px-2 text-gray-400 transition hover:text-red-400"
                    >
                        ✕
                    </button>
                </div>
            </div>
        );
    };

    // =========================
    // Sorted Data
    // =========================

    const sortedTodayPlan = sortWorkouts(
        todaysPlan
    );

    const sortedSavedPlan = sortWorkouts(
        saveLater
    );

    // =========================
    // UI
    // =========================

    return (
        <div className="min-h-screen bg-[#0e0f14] text-white">

            <div className="container mx-auto px-6 py-10">

                {/* =========================
                    Header
                ========================= */}

                <div className="mb-6">

                    <h2 className="text-2xl font-bold">
                        MY PLAN
                    </h2>

                    <p className="mt-2 text-xs text-gray-500">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>

                </div>


                {/* =========================
                    Stats
                ========================= */}

                <div className="mb-5 grid grid-cols-3 gap-4 rounded-xl border border-gray-800 bg-[#14161f] p-5">

                    {/* Exercises */}
                    <div>
                        <p className="text-xs text-gray-400">
                            Exercises
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-lime-400">
                            {totalExercises}
                        </h2>
                    </div>


                    {/* Minutes */}
                    <div className="border-l border-gray-800 pl-5">
                        <p className="text-xs text-gray-400">
                            Minutes
                        </p>

                        <h2 className="mt-1 text-2xl font-bold">
                            {totalMinutes}
                        </h2>
                    </div>


                    {/* Calories */}
                    <div className="border-l border-gray-800 pl-5">
                        <p className="text-xs text-gray-400">
                            Calories
                        </p>

                        <h2 className="mt-1 text-2xl font-bold">
                            {totalCalories}
                        </h2>
                    </div>

                </div>


                {/* =========================
                    Tabs + Sort
                ========================= */}

                <div className="mb-4">

                    {/* Tabs Header */}
                    <div className="flex items-center justify-between border-b border-gray-800">

                        {/* Tabs */}
                        <div className="flex gap-6">

                            {/* Today's Plan */}
                            <button
                                onClick={() =>
                                    setActiveTab("today")
                                }
                                className={`pb-3 text-sm font-medium transition ${
                                    activeTab === "today"
                                        ? "border-b-2 border-lime-400 text-white"
                                        : "text-gray-500 hover:text-gray-300"
                                }`}
                            >
                                Today&apos;s  Plan
                            </button>


                            {/* Saved */}
                            <button
                                onClick={() =>
                                    setActiveTab("saved")
                                }
                                className={`pb-3 text-sm font-medium transition ${
                                    activeTab === "saved"
                                        ? "border-b-2 border-lime-400 text-white"
                                        : "text-gray-500 hover:text-gray-300"
                                }`}
                            >
                                Saved
                            </button>

                        </div>


                        {/* Sort By */}
                        <div className="mb-2 flex items-center gap-3">

                            <span className="whitespace-nowrap text-sm text-gray-400">
                                Sort By
                            </span>

                            <select
                                value={sortBy}
                                onChange={(e) =>
                                    setSortBy(
                                        e.target.value
                                    )
                                }
                                className="h-9 w-32 cursor-pointer rounded-lg border border-gray-700 bg-[#15171f] px-3 text-sm text-white outline-none focus:border-lime-400"
                            >
                                <option
                                    value="duration"
                                    className="bg-[#15171f] text-white"
                                >
                                    Duration
                                </option>

                                <option
                                    value="calories"
                                    className="bg-[#15171f] text-white"
                                >
                                    Calories
                                </option>

                                <option
                                    value="sets"
                                    className="bg-[#15171f] text-white"
                                >
                                    Sets
                                </option>

                                <option
                                    value="reps"
                                    className="bg-[#15171f] text-white"
                                >
                                    Reps
                                </option>
                            </select>

                        </div>

                    </div>


                    {/* =========================
                        Today's Plan
                    ========================= */}

                    {activeTab === "today" && (
                        <div className="pt-4">

                            {sortedTodayPlan.length > 0 ? (

                                sortedTodayPlan.map(
                                    (
                                        workout: iWorkout,
                                        index: number
                                    ) =>
                                        renderWorkout(
                                            workout,
                                            "today",
                                            index
                                        )
                                )

                            ) : (

                                <div className="flex min-h-62.5 flex-col items-center justify-center rounded-xl border border-gray-800 text-center">

                                    <h3 className="text-lg font-bold">
                                        NOTHING HERE YET
                                    </h3>

                                    <p className="mt-2 text-xs text-gray-400">
                                        Browse the library and add a lift to get today moving.
                                    </p>

                                    <Link
                                        href="/workers"
                                        className="btn btn-sm mt-5 rounded-full border-none bg-lime-400 text-black"
                                    >
                                        Go to workouts
                                    </Link>

                                </div>

                            )}

                        </div>
                    )}


                    {/* =========================
                        Saved
                    ========================= */}

                    {activeTab === "saved" && (
                        <div className="pt-4">

                            {sortedSavedPlan.length > 0 ? (

                                sortedSavedPlan.map(
                                    (
                                        workout: iWorkout,
                                        index: number
                                    ) =>
                                        renderWorkout(
                                            workout,
                                            "saved",
                                            index
                                        )
                                )

                            ) : (

                                <div className="flex min-h-62.5 flex-col items-center justify-center rounded-xl border border-gray-800 text-center">

                                    <h3 className="text-lg font-bold">
                                        NOTHING HERE YET
                                    </h3>

                                    <p className="mt-2 text-xs text-gray-400">
                                        Browse the library and save a workout for later.
                                    </p>

                                    <Link
                                        href="/workers"
                                        className="btn btn-sm mt-5 rounded-full border-none bg-lime-400 text-black"
                                    >
                                        Go to workouts
                                    </Link>

                                </div>

                            )}

                        </div>
                    )}

                </div>

            </div>

        </div>
    );
};

export default WorkerList;