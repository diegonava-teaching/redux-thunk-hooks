import React from "react";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Posts from './components/Posts'

//Es un componente que nos permite pasarle el estado de Redux, a todos los hijos
import { Provider } from "react-redux";

//Este es nuestro deposito de cervezas - el espacio fisico, el
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      {/* Los componentes opcionalmente se pueden conectar a Redux */}
      <Counter1 />
      <Counter2 />
      <Posts/>
    </Provider>
  );
}

export default App;

//Clase Redux
//1.Instalar redux, react-redux, redux-logger y redux-thunk
//2. Crear store.js - dentro de carpeta de redux
//3.
