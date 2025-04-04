type Props = {
    searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ searchHandler }: Props) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search recipes..."
                className="search-input"
                onChange={searchHandler}
            />
        </div>
    );
}

export default SearchInput;