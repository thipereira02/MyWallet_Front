import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import GlobalStyle from "../components/GlobalStyle";
import UserContext from "../contexts/UserContext";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Home from "../pages/Home";
import AddFinance from "../pages/AddFinance";

export default function App(){
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));

	return (
		<>
			<GlobalStyle />
            <UserContext.Provider value={{userData, setUserData}} >
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <LoginPage />
                        </Route>
                        <Route path="/signup" exact>
                            <SignUpPage />
                        </Route>
                        <Route path="/home" exact>
                            <Home />
                        </Route>
                        <Route path="/finances" exact>
                            <AddFinance />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </UserContext.Provider>
		</>
	);
}