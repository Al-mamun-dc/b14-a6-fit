import { iWorkout } from '@/types/worker.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface IWorkerCardprops{
    workout:iWorkout

}

const WorkerCard = ({ workout }:IWorkerCardprops) => {
    return (
        <Link
            href={`/workers/${workout.id}`}
            className="overflow-hidden rounded-xl border border-gray-800 bg-[#15171c] transition hover:border-[#b6ff00]"
        >

            {/* Image */}
            <div className="h-50 w-full overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>


            {/* Card Content */}
            <div className="p-5">

                {/* Category Tags */}
                <div className="flex gap-2">

                    {workout.muscleGroups.map((muscle:string) => {

                        return (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#b6ff00] px-3 py-1 text-[9px] font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        );

                    })}

                </div>


                {/* Workout Name */}
                <h3 className="mt-4 text-lg font-bold uppercase text-white">
                    {workout.name}
                </h3>


                {/* Equipment */}
                <p className="mt-1 text-xs text-gray-500">
                    {workout.equipment}
                </p>


                {/* Divider */}
                <div className="my-4 border-t border-gray-800"></div>


                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400">

                    <span>
                        ◷ {workout.duration} min
                    </span>

                    <span>
                        ● {workout.caloriesBurned} kcal
                    </span>

                    <span>
                        ★ {workout.rating}
                    </span>

                </div>

            </div>

        </Link>
    );
};

export default WorkerCard;