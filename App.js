import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = React.createElement("h1",{},"test text here 123")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)