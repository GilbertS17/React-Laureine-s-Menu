type Props = {
    children: React.ReactNode;
}
export const PageWrapper = ({ children }: Props) => {
    return (
        <div className="p-12 bg-amber-100 flex flex-col h-auto">
            {children}
        </div>
    );
}