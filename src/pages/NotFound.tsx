import { Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";

const NotFound = () => {
    return (
        <PageWrapper>
            <div className="flex flex-col items-center min-h-screen text-center">
                <h1 className="text-8xl font-extrabold text-amber-500 drop-shadow-lg">
                    404
                </h1>
                <p className="mt-4 text-xl text-gray-700">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link
                    to="/"
                    className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-amber-500 rounded-lg shadow-lg hover:bg-amber-600 transition-all duration-300"
                >
                    Go back home
                </Link>
            </div>
        </PageWrapper>
    );
}

export default NotFound;
