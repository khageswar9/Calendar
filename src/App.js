import './App.css';
import Calendar from './components/Calendar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Calendar/>}></Route>
          <Route exact path="/:y/:m" element={<Calendar/>}></Route>
          <Route exact path="/:y" element={<Calendar/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
