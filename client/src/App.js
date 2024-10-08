import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Success from './pages/Success/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;
