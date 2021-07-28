import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../service/service";
import {
  changeInput,
  changeSorting,
  changeCategories,
} from "../../reduxToolkit/booksSlice";
const Header = () => {
  const searchInputValue = useSelector(
    (state) => state.booksSlice.searchInputValue
  );
  const sortingBy = useSelector((state) => state.booksSlice.sortingBy);
  const startIndex = useSelector((state) => state.booksSlice.startIndex);
  const categories = useSelector((state) => state.booksSlice.categories);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <p className="header__text">Search For Books</p>
      <div className="header__searchBlock">
        <input
          onKeyDown={(e) => {
            if (e.keyCode !== 13) return;
            dispatch(
              getBooks({ searchInputValue, sortingBy, startIndex, categories })
            );
          }}
          onChange={(e) => dispatch(changeInput(e.target.value))}
          value={searchInputValue}
          placeholder="enter the title of the book"
          className="header__searchInput"
        ></input>
        <i
          onClick={() => {
            if (searchInputValue.trim() === "") return;
            dispatch(
              getBooks({ searchInputValue, sortingBy, startIndex, categories })
            );
          }}
          className="fa fa-search fa-2x"
        ></i>
      </div>
      <div className="header__settings">
        <p>Categories</p>
        <select
          onChange={(e) => dispatch(changeCategories(e.target.value))}
          className="header__selectSetting"
        >
          <option>all</option>
          <option>art</option>
          <option>biography</option>
          <option>computers</option>
          <option>history</option>
          <option>medical</option>
          <option>poetry</option>
        </select>
        <p>Sorting by</p>
        <select
          onChange={(e) => dispatch(changeSorting(e.target.value))}
          className="header__selectSetting"
        >
          <option>relevance </option>
          <option>newest</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
