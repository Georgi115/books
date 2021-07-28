import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import Error from "../error/error";
import Preloader from "../preloader/preloader";
import "./bookDetails.css";
const BookDetails = ({ history }) => {
  const detailsBook = useSelector((state) => state.booksSlice.detailsBook);
  const detailsLoader = useSelector((state) => state.booksSlice.detailsLoader);
  const error = useSelector((state) => state.booksSlice.errorDetails);
  if (!detailsBook && !detailsLoader && !error) {
    history.push("/");
    return null;
  }
  return (
    <div className="detailsBook">
      <div className="detailsBook__btn">
        <button
          className="detailsBook__button"
          onClick={() => history.push("/")}
        >
          come back
        </button>
      </div>
      {detailsLoader ? (
        <Preloader />
      ) : error ? (
        <Error />
      ) : (
        <div className="detailsBook__block">
          <div className="detailsBook__img">
            <img
              src={
                detailsBook.volumeInfo.imageLinks
                  ? detailsBook.volumeInfo.imageLinks.small
                  : null
              }
              alt="img"
            ></img>
          </div>
          <div className="detailsBook__description">
            <p className="detailsBook__categories">
              {detailsBook.volumeInfo.categories
                ? detailsBook.volumeInfo.categories.join()
                : null}
            </p>
            <p className="detailsBook__title">
              {detailsBook.volumeInfo.title
                ? detailsBook.volumeInfo.title
                : null}
            </p>
            <p className="detailsBook__authors">
              {detailsBook.volumeInfo.authors
                ? detailsBook.volumeInfo.authors.join()
                : null}
            </p>
            <p className="detailsBook__text">
              {detailsBook.volumeInfo.description
                ? detailsBook.volumeInfo.description
                : "description none"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(BookDetails);
