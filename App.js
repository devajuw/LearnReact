import React from 'react';
import ReactDOM from 'react-dom/client';
const parent=React.createElement('div', {id:"parent"}, 
            React.createElement('div', {id:"child"},
            React.createElement('h1', {id:"h1"}, "I am a H1 heading"),
            // React.createElement('p', {id:"para"}, "This is a paragraph")
        ));
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);