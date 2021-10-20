import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import React from "react";

import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

export default function App(){
	return (
		<>
			<GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <LoginPage />
                    </Route>
                    <Route path="/signup" exact>
                        <SignUpPage />
                    </Route>
                </Switch>
            </BrowserRouter>
		</>
	);
}