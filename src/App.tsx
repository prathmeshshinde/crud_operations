import "./App.css";
import Add from "./Modules/Employee/Pages/Add";
import Admin from "./Modules/Employee/Pages/Admin";
import Display from "./Modules/Employee/Pages/Display";
import Update from "./Modules/Employee/Pages/Update";
import Home from "./Modules/Home/Home";
import Navbar from "./Modules/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayTeach from "./Modules/Teacher/Pages/DisplayTeach";
import AdminTeach from "./Modules/Teacher/Pages/AdminTeach";
import AddTeach from "./Modules/Teacher/Pages/AddTeach";
import UpdateTeach from "./Modules/Teacher/Pages/UpdateTeach";
import AddEngi from "./Modules/Engineer/Pages/AddEngi";
import AdminEngi from "./Modules/Engineer/Pages/AdminEngi";
import DisplayEngi from "./Modules/Engineer/Pages/DisplayEngi";
import UpdateEngi from "./Modules/Engineer/Pages/UpdateEngi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/display" element={<Display />} />
          <Route path={`/update/:id`} element={<Update />} />
          <Route path={"/addteach"} element={<AddTeach />} />
          <Route path={"/adminteach"} element={<AdminTeach />} />
          <Route path={"/displayteach"} element={<DisplayTeach />} />
          <Route path={`/updateteach/:id`} element={<UpdateTeach />} />
          <Route path={"/addengi"} element={<AddEngi />} />
          <Route path={"/adminengi"} element={<AdminEngi />} />
          <Route path={"/displayengi"} element={<DisplayEngi />} />
          <Route path={`/updateengi/:id`} element={<UpdateEngi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
