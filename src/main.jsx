import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import { Search } from './pages/Search/Search.jsx'
import { GlobalStyle } from './GlobalStyled.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import { Auth } from './pages/Authentication/Auth.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import Check from './pages/Check/Check.jsx'
import UserProvider from './Context/userContext.jsx'
import { Helmet } from 'react-helmet'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navbar />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/search/:cpf',
				element: <Search />
			}
		]
	},
	{
		path: '/auth',
		element: <Auth />
	},
	{
		path: '/cadastro',
		element: <Cadastro />
	},
	{
		path: 'check',
		element: <Check />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Helmet>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap" />
		</Helmet>
		<GlobalStyle />
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</React.StrictMode>,
)
