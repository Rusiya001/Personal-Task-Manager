import {NavLink, Outlet} from "react-router-dom";

function Layout() {
    return(
        <div>
            <a className = "skip-link" href = "#main-content">Skip to main content</a>
            <header className = "site-header">
                <div className="header-content">
                    <NavLink className="brand" to="/"> Task Manager </NavLink>
                    <nav aria-label="Main navigation">
                        <NavLink to="/" end>Home</NavLink>
                        <NavLink to="/tasks" end>Tasks</NavLink>
                        <NavLink to="/login" end>Login</NavLink>
                    </nav>
                </div>
            </header>
            <main id="main-content" className="page-content" >
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;