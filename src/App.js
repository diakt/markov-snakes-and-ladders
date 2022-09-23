import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';

import Footer from './components/Footer';
import Math from './components/Math';
import History from './components/History';

function App() {
  return (

    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/math" element={<Math />} />
          <Route exact path="/history" element={<History />} />
        </Routes>
      </main>

      {/* <footer className="footer">
          <Footer />
        </footer> */}
    </div>

  );
}

export default App;