import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from "./pages/Landing"
import Projects from "./pages/Projects" 

import './styles/main.scss'

function App() {
  // Dynamically set the basename based on the current location pathname, because process doesn't work
  const basename = window.location.pathname.startsWith('/your-deployment-subpath')
    ? '/your-deployment-subpath'
    : '/';

  return (
    <Router basename={basename}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </Router>
  );
}

export default App;
