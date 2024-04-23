import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainProvider } from './providers/MainProvider.tsx'
import { Login } from './auth/Login.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MainProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<App />} />
					{/* authentication */}
					<Route path="login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</MainProvider>
	</React.StrictMode>,
)
