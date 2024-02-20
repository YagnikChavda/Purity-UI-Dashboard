import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from './UICoponents/SideBar';
import SignIn from './SignIn/SignIn';
import { useState } from 'react';
import AuthContext from './StoreContext/context-value';
import SignUp from './SignUp/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	
	const [isLogin, setIsLogin] = useState(false);

	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path="" element={<SignIn />} />
					<Route path="/dashboard" element={<SideBar />} />
					<Route path="/profile" element={<SideBar />} />
					<Route path="/dashboard/:dashboardLink" element={<SideBar />} />
					<Route path="/dashboard" element={<SideBar />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
				</Route>
			</Routes>
		</BrowserRouter>

		// <AuthContext.Provider
		// 	value={{ isLoginContextValue: isLogin, }}>

		// 	{isLogin && <SideBar />}
		// 	{!isLogin &&
		// 		<Routes>
		// 			<Route path="/signin">
		// 				<SignIn />
		// 			</Route>
		// 		</Routes>
		// 	}
		// </AuthContext.Provider>
	)
}

export default App;
