//3 - Componente
import React, {ReactElement, useContext} from "react";
import App, {AppContext} from "../App";

function FirstComponent(): ReactElement {
    const details = useContext(AppContext);

    return (
        <>
            {details && (
                <div>
                    <h2>{details.language}</h2>
                    <p>{details.projects}</p>
                </div>
            )}
        </>
    );
}

export default FirstComponent;