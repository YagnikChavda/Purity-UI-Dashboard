import React, { useState , useEffect } from "react";

const AuthContext = React.createContext ({
    isLoginContextValue : true
});

export const AuthUseContext = () => {
    
	const [isLogIn , setIsLogIn] = useState(false);
	const [loginText , setLoginText]= useState("");

    const LogoutHandler = () =>  {
		localStorage.setItem("isLoginValue" , "0");
		setIsLogIn(false);
	}

	const userLoginStorage = () => {
		const localStorageValue = localStorage.getItem("isLoginValue");
		
		if ( localStorageValue === "1" ) {
			setIsLogIn(true);
			setLoginText("You succesfully logged in");
		}
	}

	useEffect( userLoginStorage , [userLoginStorage , LogoutHandler] );
}

export default AuthContext;