import React from "react";
import { connect } from "react-redux";

import { incrementar, decrementar } from "../redux/actions";

class Counter1 extends React.Component {
  // state={
  //   counter: 0
  // }

  handleIncrement = () => {
    const { sumar } = this.props;
    sumar();
    // this.setState({ counter: this.state.counter } )
    // console.log("this.props en handleIncrement: ", this.props);
    // this.props.dispatch({ type: "INCREMENTAR" });
  };

  handleDecrement = () => {
    this.props.restar();
  };

  render() {
    const { counter } = this.props;
    console.log("this.props: ", this.props);

    return (
      <>
        <h1>Counter 1</h1>
        <p>{counter}</p>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        {/* <Counter2 counterProp={counter}/> */}
      </>
    );
  }
}

// export default Counter1;

//Nos permite consumir el estado de redux como props
function mapStateToProps(state) {
  console.log("mapStateToProps: ", state.counter);
  return {
    counter: state.counter,
  };
}

// Nos permite lanzar acciones para que sean escuchadas por Redux
//Una accion se tiene que lanzar dentro de dispatch() para que llegue al reducer
function mapDispatchToProps(dispatch) {
  console.log("dispatch: ", dispatch);
  return {
    sumar: () => dispatch(incrementar()),
    restar: () => dispatch({ type: "DECREMENTAR" }),
  };
}
//Aqui estamos conectando nuestro componente
// 1. Para que le lleguen como props el estado de redux, por medio de la funcion: (mapStateToProps)
// 2. Y tambien pueda lanzar las acciones hacia redux (con dispatch) y estas lleguen al reducer (mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Counter1);

//Cuando lo tienen de estar manera, se usa dispatch en sus metodos
// export default connect(mapStateToProps, null)(Counter1);

// handleIncrement = () => {
//   const { dispatch } = this.props;
//   dispatch({ type : 'INCREMENTAR'});
// };
