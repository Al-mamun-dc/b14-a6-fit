import React from 'react';
import Image from 'next/image';
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <div className="mx-4 mt-7 flex flex-col items-center justify-between gap-8 rounded-xl border border-gray-800 bg-[#15171c] px-6 py-8 sm:px-8 md:flex-row">

            <div>

                <p className="mb-3 text-[9px] font-bold tracking-widest text-[#b6ff00]">
                    WORKOUT LIBRARY
                </p>

                <h2 className="text-3xl font-extrabold leading-none text-white sm:text-4xl">
                    TRAIN WITH INTENT. LOG
                    <br />
                    EVERY SET.
                </h2>

                <p className="mt-4 max-w-md text-xs leading-5 text-gray-400">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today&apos;s plan, and watch the week&apos;s work add up.
                </p>

                <a
                    className="mt-4 inline-flex items-center gap-2 rounded bg-[#b6ff00] px-4 py-2 text-[9px] font-bold text-black"
                    href="#library"
                >
                    <span>↓</span>
                    BROWSE WORKOUTS
                </a>

            </div>

            <div className="mr-0 md:mr-8">
                <Image
                    src={banner}
                    alt="Workout banner"
                    width={190}
                    height={190}
                    className="w-40 sm:w-48"
                />
            </div>

        </div>
    );
};

export default Banner;