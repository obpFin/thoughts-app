import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addThought } from './actions/thoughts';
import getVisibleThoughts from './selectors/thoughts';
import ThoughtsApp from './components/ThoughtsApp';
import 'normalize.css/normalize.css'
import css from './styles/app.scss';

const store = configureStore();

store.dispatch(addThought({ text: 'test thought' }));

const state = store.getState();
const visibleThoughts = getVisibleThoughts(state.thoughts, state.filters);

const jsx = (
  <Provider store={store}>
    <ThoughtsApp />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));



