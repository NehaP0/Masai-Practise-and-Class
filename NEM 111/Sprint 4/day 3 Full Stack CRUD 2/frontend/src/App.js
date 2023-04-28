import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />

      </Routes>
    </div>
  );
}

export default App;
