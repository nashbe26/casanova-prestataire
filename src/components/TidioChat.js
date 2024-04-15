import React, { useEffect } from 'react';

const TidioChatWidget = () => {
    useEffect(() => {
        const tidioScript = document.createElement("script");
        tidioScript.src = "//code.tidio.co/uggrxwma1w1frupqscqcehkjsn8njwvy.js";
        tidioScript.async = true;
        document.body.appendChild(tidioScript);

        return () => {
            document.body.removeChild(tidioScript);
        };
    }, []);

    return null;
};

export default TidioChatWidget;
