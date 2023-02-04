import React from 'react';
import reactDOM from 'react-dom/client';
import { CounterApp } from "./CounterApp";

import './styles.css';

reactDOM.createRoot (document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={10}/>
    </React.StrictMode>
    
);