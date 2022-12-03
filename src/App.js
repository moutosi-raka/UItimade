
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp/SignUp';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignUp></SignUp>
    }
  ])
  return (
    <RouterProvider
    router={router}
    ></RouterProvider>
  );
}

export default App;
