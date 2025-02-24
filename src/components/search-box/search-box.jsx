import "./search-box.css";

export const SearchBox = ({placeHolder, handleChange}) => (
    <input
        className="search"
        type="search"
        placeholder={placeHolder}
        onChange={handleChange}/>
);