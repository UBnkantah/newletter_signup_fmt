import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages'
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/success' element={<SuccessPg />} /> */}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
