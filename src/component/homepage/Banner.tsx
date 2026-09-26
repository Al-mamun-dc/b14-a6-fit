import React from 'react';
import Image from 'next/image';
import banner from "@/assets/banner.png"

const Banner = () => {
    return (
        <div className="mx-4 mt-7 flex items-center justify-between rounded-xl border border-gray-800 bg-[#15171c] px-8 py-8">

            <div>

                <p className="mb-3 text-[9px] font-bold tracking-widest text-[#b6ff00]">
                    WORKOUT LIBRARY
                </p>

                <h2 className="text-4xl font-extrabold leading-none text-white">
                    TRAIN WITH INTENT. LOG
                    <br />
                    EVERY SET.
                </h2>

                <p className="mt-4 max-w-md text-xs leading-5 text-gray-400">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today&apos;s plan, and watch the week&apos;s work add up.
                </p>

                <a className='mt-4 inline-flex rounded bg-[#b6ff00] px-4 py-2 text-[9px] font-bold text-black' href="#library">
                    BROWSE WORKOUTS
                </a>
            </div>

            <div className="mr-8">
                <Image
                    src={banner}
                    alt="banner"
                    width={190}
                    height={190}
                />
            </div>

        </div>
    );
};

export default Banner;