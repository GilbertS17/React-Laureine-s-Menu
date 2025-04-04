type Props = {
    children: React.ReactNode;
}
export const PageWrapper = ({ children }: Props) => {
    return (
        <div className="page-wrapper-container">
            {children}
        </div>
    );
}