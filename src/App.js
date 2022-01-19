import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact';
import Homepage from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default App;
