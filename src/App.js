import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {

  let isLogged = true;
  let data = {
    'msg':'User Not Logged In..'
  }

  return (
  <>
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/post/:category" element={<Post />} />
        <Route path="/post/:category/:id" element={<Post />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to="/login" replace state={data} />} />
        

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
