import {Link} from "react-router-dom";

function NotFoundPage() {
    return(
        <section>
            <h1>Page not found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link className="button" to="/">
                Back to Home
            </Link>
        </section>
    );
}

export default NotFoundPage;