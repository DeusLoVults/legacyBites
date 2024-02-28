import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'

import Home from './views/home'
import NotFound from './views/not-found'

function App() {
    return (
        <Home/>
    )
}

export default App;
