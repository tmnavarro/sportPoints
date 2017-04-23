
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import logger from 'redux-logger';

// Importação de reducers do sistema
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise(), thunk, logger())(createStore);

export default createStoreWithMiddleware(reducer);
