import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Import Routes all
import { publicRoutes } from "./Pages/Ui/index";

const Header = () => {

    return (
        <Router>
            <div>
                {/* DO NOT REMOVE THE BELOW COMPONENT STATEMENT */}
                <nav className="navbar navbar-expand-lg navbar-light  bg-custom">
                    <span className="navbar-brand">
                        <Link className="nav-link" to="/">
                            Demo App
                        </Link></span>
                    <ul className="navbar-nav">
                        {publicRoutes.map((route, idx) => (
                            <Link
                                className="nav-link"
                                to={route.path}
                            >{route.path}</Link>
                        ))}
                    </ul>

                </nav>

                {/* code the required routes here */}
                <Routes>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={route.component}
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default Header;