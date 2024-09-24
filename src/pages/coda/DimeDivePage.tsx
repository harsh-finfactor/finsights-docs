import React from "react";
import RapiDocReact from "../../components/RapidDocReact";

const DimeDivePage: React.FC = React.memo(() => {
    return <RapiDocReact
        spec-url={'/dimedive.json'}
        show-header={false}
        render-style="view"
        primary-color="#4D2FA3"
    />;
});

export default DimeDivePage;
