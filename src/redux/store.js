//Aqui es donde habita el 'estado' general de la aplicacion

//Esto me permite un store y recibe como parametro un reducer
//Esto es mi deposito de cerveza
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'

//ApplyMiddleware nos permite usar plugins/extensiones/poderes para redux

//Es quien determina/maneja el estado
//Son las personas que estan en el almacen, sacan y meten cerveza
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
