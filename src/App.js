import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './hocs/Layout'
import AccessControl from './pages/AccessControl'
import Home from './pages/Home'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/access-control" component={AccessControl} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App