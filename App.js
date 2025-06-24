import React from 'react';
import ReactDOM from 'react-dom/client';

const Heading = () => {
    return <h1 id="heading"> I am a Heading component </h1>};
        const root = ReactDOM.createRoot(document.getElementById("root"));
        // const jsxHeading = <h1 id="heading"> I am a boy toy </h1>; 
        root.render(<Heading/>);