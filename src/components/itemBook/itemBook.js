import "./itemBook.css";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { getDetailsBook } from "../service/service";
const ItemBook = ({ info, history, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="itemBook"
      onClick={() => {
        history.push("/book/" + id);
        dispatch(getDetailsBook(id));
      }}
    >
      <div className="itemBook__img">
        <img
          src={info.imageLinks ? info.imageLinks.thumbnail : null}
          alt="img"
        ></img>
      </div>
      <div className="itemBook__categories">
        {info.categories
          ? info.categories.map((el, id) => {
              return <p key={id}>{el}</p>;
            })
          : null}
      </div>
      <div className="itemBook__title">
        <p>{info.title}</p>
      </div>
      <div className="itemBook__author">
        {info.authors
          ? info.authors.map((el, id) => {
              return <p key={id}>{el}</p>;
            })
          : null}
      </div>
    </div>
  );
};

export default withRouter(ItemBook);
