import Header from "./components/header/header";
import Main from "./components/main/main";
import BookDetails from "./components/bookDetails/bookDetails";
import { Route } from "react-router";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact render={() => <Main />}></Route>
      <Route path="/book/:id" render={() => <BookDetails />}></Route>
    </div>
  );
};

export default App;
