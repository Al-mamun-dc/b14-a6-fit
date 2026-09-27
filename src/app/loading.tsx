const Loading = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0e0f14] text-white">

            {/* Loading Spinner */}
            <span className="loading loading-spinner loading-lg text-lime-400"></span>

            {/* Loading Text */}
            <p className="mt-4 text-sm text-gray-400">
                Loading exercises...
            </p>

        </div>
    );
};

export default Loading;