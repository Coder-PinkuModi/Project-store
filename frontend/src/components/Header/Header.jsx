import { SearchBox } from "../index.js";
import { useState } from "react"; // To handle user state
import storeLogo from "../../assets/store-logo.png";

function Header({ user = "Guest" }) {
    const [isAuthenticated, setIsAuthenticated] = useState(user !== "Guest");

    return (
        <div className="nav w-screen h-48 flex flex-wrap bg-custom-headerBlue items-center">
            <div className="flex flex-wrap justify-between items-center w-screen">
                <div className="logo pl-14">
                    <img src={storeLogo} alt="logo" className="h-32 w-40 object-center pt-3" />
                </div>

                <div className="nav-items flex items-center px-5">
                    {/* Home Button */}
                    <button className="nav-button home-button">Home</button>

                    {/* Authentication Section */}
                    <div className="auth flex justify-center items-center px-5">
                        {isAuthenticated ? (
                            <div className="auth-logged-in">
                                {/* Display welcome message and logout button when authenticated */}
                                <span className="welcome-text">Welcome, {user}!</span>
                                <button 
                                    onClick={() => setIsAuthenticated(false)} 
                                    className="auth-button logout-button"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-center items-center px-5 gap-8">
                                {/* Display login and signup buttons when not authenticated */}
                                <button className="auth-button login-button">Login</button>
                                <button className="auth-button signup-button">Sign Up</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Search box for product search */}
            <SearchBox />
        </div>
    );
}

export default Header;
