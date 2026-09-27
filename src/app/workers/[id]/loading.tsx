const Loading = () => {
    return (
        <div className="min-h-screen bg-[#0e0f14] text-white flex flex-col items-center justify-center">

            <span className="loading loading-spinner loading-lg text-lime-400"></span>

            <p className="mt-4 text-sm text-gray-400">
                Loading exercise details...
            </p>

        </div>
    );
};

export default Loading;