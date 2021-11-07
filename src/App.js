import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';

import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

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
          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>


            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>


            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>


            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>


            <Route exact path="/">
              <Home></Home>
            </Route>

          </Switch>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
