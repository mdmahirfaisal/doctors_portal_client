import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';

import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAddmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';

// import { ToastContainer, toast } from 'react-toastify';

// toast.success('User Login Successfully')
/* <ToastContainer
  position="top-center"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/> */

function App() {




  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Routes>

            <Route path="/home" element={<Home />} />


            <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>} />

            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome />} />


              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment />} />


              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />

              <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor /></AdminRoute>} />


            </Route>

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />



            <Route exact path="/" element={<Home />} />


          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
