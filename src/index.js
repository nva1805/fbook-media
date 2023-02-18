import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom'
import router from './router/Router';
import { AuthContextProvider } from './components/context/authContext';

// Protected function
// const {currentUser} = useContext(AuthContext)
// export const currentUser = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
