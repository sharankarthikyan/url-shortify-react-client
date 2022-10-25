import { useState, useEffect } from "react";
import axios from "axios";

const PageNotFound = () => {
    const [isPageNotFound, setIsPageNotFound] = useState(false);

    useEffect(() => {
        let path = window.location.pathname.replace("/", "");
        axios
            .get("https://url-shortify.azurewebsites.net/" + path)
            .then((res) => {
                if (res && res.data) {
                    window.location.href = res.data;
                }
            })
            .catch(() => {
                setIsPageNotFound(true);
            });
    }, []);
    return (
        <div>
            {isPageNotFound ? (
                <div style={{ marginTop: "48px" }}>
                    <h1>404 Error</h1>
                    <h1>Page Not Found</h1>
                </div>
            ) : (
                <div style={{ marginTop: "48px" }}>
                    <h1>
                        <span style={{ color: "red" }}>Finding</span> your
                        destination...
                    </h1>
                    <h2>🚀 - Stay hungry, Stay foolish.</h2>
                </div>
            )}
        </div>
    );
};

export default PageNotFound;
