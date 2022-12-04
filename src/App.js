
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AttendanceInfo from './pages/AttendanceInfo/AttendanceInfo';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import SignUp from './pages/SignUp/SignUp';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignUp></SignUp>,
    },
   {
          path: '/login',
          element: <Login></Login>
   },
   {
    path: 'attendance',
    element: <PrivateRoute><AttendanceInfo></AttendanceInfo></PrivateRoute>
   }
     
  ])
  return (
    <RouterProvider
    router={router}
    ></RouterProvider>
  );
}

export default App;
