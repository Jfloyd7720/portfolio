import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
