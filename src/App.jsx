import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './Component/Login';
import Register from './Component/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import { useEffect } from 'react';
import Expenses from './Component/Expenses';

function App() {
  const isAuthenticated = () => {
    const localData = sessionStorage.getItem("UserToken");
    const userToken = JSON.parse(localData);
    return userToken;
  };

  //function to redirect user at login component if user is not login 
  const ProtectedRoute = ({ element: Element, ...props }) => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!isAuthenticated()) {
        navigate("/", { replace: true, state: { from: props.location } });
      }
    }, [navigate, props.location]);

    return isAuthenticated() ? <Element {...props} /> : null;
  };

  //function to redirect at dashboard if user is login
  const RedirectToDashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
      if (isAuthenticated()) {
        navigate("/dashboard", { replace: true });
      }
    }, [navigate]);

    return <Login />;
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<RedirectToDashboard />} />
        <Route path='/register' element={<Register />} /> 
        <Route path='/dashboard' element={<ProtectedRoute element={Dashboard} />} />
        <Route path='/expenses' element={<ProtectedRoute element={Expenses} />} />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
