import { SearchBox } from "../Components.js";
import { useState } from "react"; // To handle user state
import storeLogo from "../../assets/store-logo.png"

function Header({ user = "Guest" }) {
    const [isAuthenticated, setIsAuthenticated] = useState(user !== "Guest");

    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={storeLogo} alt="logo" />
                </div>

                <div className="auth">
                    {isAuthenticated ? (
                        <>
                            <span>Welcome, {user}!</span>
                            <button onClick={() => setIsAuthenticated(false)}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button>Login</button>
                            <button>Sign Up</button>
                        </>
                    )}
                </div>
            </div>

            {/* Search box for product search */}
            <SearchBox />
        </>
    );
}

export default Header;
