import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>An Error has Occurred.</h1>
            <p>There was an error with routing to this page, please see below.</p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    );
}