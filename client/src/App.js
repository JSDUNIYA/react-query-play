import { Routes, Route } from "react-router-dom";
import { BooksList } from "./BooksList";
import { CreateBook } from "./CreateBook";
import { UpdateBook } from "./UpdateBook";
import { NavBar } from "./shared/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/update-book" element={<UpdateBook />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/" element={<BooksList />} />
      </Routes>
    </>
  );
}

export default App;
