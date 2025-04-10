import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found-outer-container">
            <h1 className="not-found-logo">
                404
            </h1>
            <p className="not-found-message">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="home-button"
            >
                Go back home
            </Link>
        </div>
    );
}

export default NotFound;