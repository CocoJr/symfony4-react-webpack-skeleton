import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/index';
import saga from '../sagas/index';

import TasksIndex from '../components/Task/index';
import TaskShow from '../components/Task/show';
import TaskCreate from '../components/Task/create';

// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={TasksIndex} />
                        <Route exact path="/new" component={TaskCreate} />
                        <Route exact path="/{id}" component={TaskShow} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;