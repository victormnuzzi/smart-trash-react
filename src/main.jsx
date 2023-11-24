import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aplicativo from './routes/Aplicativo.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Cadastro from './routes/Cadastro.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/aplicativo', element: <Aplicativo />},
      {path: '/sobre', element: <Sobre />},
      {path: '/login', element: <Login />},
      {path: '/cadastro', element: <Cadastro />}
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
