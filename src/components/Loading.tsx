const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-amber-100">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-t-green-500 border-gray-300 rounded-full animate-spin"></div>

                <h1 className="text-xl font-semibold text-gray-700 tracking-wide animate-pulse">
                    Loading...
                </h1>
            </div>
        </div>
    );
}

export default Loading;
