import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
// import { router } from './Routes/Routers.jsx';

import { HelmetProvider } from 'react-helmet-async';
// import AuthProvider from './provicers/AuthProvider';



import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider';
import router from './components/Routes/Router';

const queryClient = new QueryClient()





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>


        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>



      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
