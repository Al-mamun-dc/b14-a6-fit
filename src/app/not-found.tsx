import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b0d10] px-6 text-center text-white">

            <h1 className="text-6xl font-extrabold text-[#b6ff00]">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold">
                PAGE NOT FOUND
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-md bg-[#b6ff00] px-5 py-2 text-xs font-bold text-black"
            >
                GO TO WORKOUTS
            </Link>

        </div>
    );
};

export default NotFound;