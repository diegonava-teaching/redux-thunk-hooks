//Se utilizan ACTION CREATORS, para tener nuestras acciones
// Es una funcion que regresa un objecto con la propiedad 'type'
export function incrementar() {
  return {
    type: "INCREMENTAR",
  };
}

export function decrementar() {
  return {
    type: "DECREMENTAR",
  };
}



//Thunk con async-await
export function getPosts() {
  return async dispatch => {
    //VAMOS A HACER UNA LLAMADA A LA API
    dispatch({ type: "GET_POSTS_START" });

    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const posts = await response.json()

      dispatch({ type: 'GET_POSTS_SUCCESS', payload: posts})
    } catch(error){
      dispatch({ type: 'GET_POSTS_ERROR', error})
    }

  };
}

//Thunk con promesa
// export function getPosts() {
//   return (dispatch) => {
//     //VAMOS A HACER UNA LLAMADA A LA API
//     dispatch({ type: "GET_POSTS_START" });

//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((res) => {
//         //ERROR FIRST
//         if (res.error) {
//           throw res.error;
//         }
//         return setTimeout(() => {
//           dispatch({ type: "GET_POSTS_SUCCESS", payload: res })
//         }, 3000); 
//       })
//       .catch(
//         (error) => {
//           dispatch({ type: "GET_POSTS_ERROR", error });
//         }
//       );;
//   };
// }
