import React from 'react';
import './App.css';
import {Header} from "./features/Header/Header";
import {Pages} from "./features/pages/Pages";

function App() {

    return (
        <div className="App">
            <Header/>
            <Pages/>
        </div>
    );
}

export default App;
