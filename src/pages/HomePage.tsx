import {Link} from "react-router-dom";

function HomePage() {
    return(
        <section className="hero">
            <h1>Keep your tasks organised</h1>

            <p>Plan your work, set prorities and track your progress in one place.</p>

            <Link className="button" to="/tasks">
                Go to Tasks
            </Link>
        </section>
    );
}

export default HomePage;