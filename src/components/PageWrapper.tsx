import { Outlet } from 'react-router-dom';

export const PageWrapper = () => {
    return (
        <div className="page-wrapper-container">
            <Outlet />
        </div>
    );
}