//Es quien determina/maneja el estado

//Tu aqui defines la forma inicial de tu estado
const initialState = {
  counter: 0,
  posts: [],
  isLoading: false,
  error: null
};

//Esta es una accion pura, basicamente un objeto vacio
//Las acciones son lo que tienen que hacer si hubo una venta o devolucion
// {
//   type: "DECREMENTAR";
// }

//Esta es la forma clasica de una funcion de 'reducer'
//Nuestro reducer, escucha acciones y modica el estado con base en la accion
//El reducer, es inteligente y piensa, sabe que hacer si le llega una accion
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENTAR":
      //Aqui, dependiendo de cada  caso, se manipula el estado
      return {
        //spread operator
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENTAR":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'GET_POSTS_START':
      return {
        ...state,
        isLoading: true,
        posts: [],
        error: null
      }
    case 'GET_POSTS_SUCCESS':
      console.log('accion cuando es del "type" GET_POSTS_SUCCESS: ', action)
      return {
        ...state,
        isLoading: false,
        error: false,
        posts: action.payload,
      }
      case 'GET_POSTS_ERROR':
        return{
          ...state,
          isLoading: false,
          posts: null,
          error: action.error
        }   
    default:
      return state;
  }
}

export default reducer;
