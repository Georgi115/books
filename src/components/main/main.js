import "./main.css";
import { useSelector, useDispatch } from "react-redux";
import { changeStartIndex } from "../../reduxToolkit/booksSlice";
import { addBooks } from "../service/service";
import ItemBook from "../itemBook/itemBook";
import Preloader from "../preloader/preloader";
import Error from "../error/error";
import React from "react";

const Main = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.booksSlice.errorLoading);
  const buttonLoading = useSelector((state) => state.booksSlice.buttonLoading);
  const searchInputValue = useSelector(
    (state) => state.booksSlice.searchInputValue
  );
  const sortingBy = useSelector((state) => state.booksSlice.sortingBy);
  const startIndex = useSelector((state) => state.booksSlice.startIndex);
  const books = useSelector((state) =>
    state.booksSlice.books ? state.booksSlice.books.items : null
  );
  const totalItems = useSelector((state) =>
    state.booksSlice.books ? state.booksSlice.books.totalItems : null
  );
  const loading = useSelector((state) => state.booksSlice.loading);
  const categories = useSelector((state) => state.booksSlice.categories);
  return (
    <main className="main">
      {Array.isArray(books) && loading === false ? (
        <React.Fragment>
          {" "}
          <div className="main__founResults">
            <p>Found {totalItems} results</p>
          </div>
          <div className="main__cardBooks">
            {books.map((item, id) => {
              return <ItemBook key={id} info={item.volumeInfo} id={item.id} />;
            })}
          </div>
          <div className="main__btn">
            {totalItems < 30 ? null : (
              <button
                onClick={() => {
                  dispatch(changeStartIndex());
                  dispatch(
                    addBooks({
                      searchInputValue,
                      sortingBy,
                      startIndex,
                      categories,
                    })
                  );
                }}
              >
                {buttonLoading ? "loading..." : "load more"}
              </button>
            )}
          </div>{" "}
        </React.Fragment>
      ) : loading === true ? (
        <Preloader />
      ) : error ? (
        <Error />
      ) : books === undefined && loading === false ? (
        <p style={{ textAlign: "center" }}>Ничего не найдено</p>
      ) : (
        <p className="main__text">Введите запрос</p>
      )}
    </main>
  );
};

export default Main;
