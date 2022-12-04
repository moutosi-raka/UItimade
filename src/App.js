
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
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
   }
     
  ])
  return (
    <RouterProvider
    router={router}
    ></RouterProvider>
  );
}

export default App;
