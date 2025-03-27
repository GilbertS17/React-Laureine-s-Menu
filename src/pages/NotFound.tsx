import { Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";

const NotFound = () => {
    return (
        <PageWrapper>
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
        </PageWrapper>
    );
}

export default NotFound;