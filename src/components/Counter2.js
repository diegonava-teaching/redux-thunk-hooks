import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { incrementar, decrementar } from "../redux/actions";

//class Counter2 extends React.Component
function Counter2() {
  // const [counter, setCounter] = useState(6)

  //Este hook de redux, es como el MapStateToProps pero en bonito
  const counterFromRedux = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  // useState().[propiedad, manejadorDeLaPropiedad]
  
  // state={
  //   counter: 0
  // }

  // const sumar = (a, b) => a + b
  // function sumar(a,b){
  //   retunr a+b
  // }

  const handleIncrement = () => {
    // this.setState({ counter: this.state.counter + 1 });
    // setCounter(counter + 1)
    dispatch({ type: 'INCREMENTAR'})
  };

  const handleDecrement = () => {
    // this.setState({ counter: this.state.counter - 1 });
    // setCounter(counter - 1)
    dispatch(decrementar())
  };

  // render() {
    // const { counter } = this.state;
    return (
      <>
        <h1>Counter 2</h1>
        <p>{counterFromRedux}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </>
    );
  // }
}

export default Counter2;
