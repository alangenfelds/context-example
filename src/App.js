import React, { Component, useRef } from "react";
import ButtonA from "./ButtonA.component";
import ButtonB from "./ButtonB.component";
import { SharedSnackbarProvider } from "./SharedSnackbar.context";

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  outer: {
    backgroundColor: "red",
    height: '300px',
    width: '300px',
    position: 'relative'
  },
  middle: {
    backgroundColor: "blue",
    height: '200px',
    width: '200px',
    position: 'absolute',
    top: "40px",
    left: "40px"
  },
  inner: {
    backgroundColor: "green",
    height: '100px',
    width: '100px',
    position: 'absolute',
    top: "40px",
    left: "40px"
  }
};

class App extends Component {

  outerRef = React.createRef();
  innerRef = React.createRef();
  middleRef = React.createRef();

  componentDidMount() {
    this.middleRef.current.addEventListener('click', () => console.log('middle -->'), true)
    this.innerRef.current.addEventListener('click', () => console.log('inner -->'))
    this.outerRef.current.addEventListener('click', () => console.log('outer'))
  }

  render() {
     return (
      <div style={styles.app}>
        <SharedSnackbarProvider>
          <div ref={this.outerRef} style={styles.outer}>
            OUTER
            <div ref={this.middleRef} style={styles.middle}>
              MIDDLE
              <div ref={this.innerRef} style={styles.inner}>inner</div>
            </div>
          </div>
          <ButtonA />
          <ButtonB />
        </SharedSnackbarProvider>
      </div>
    );
  }
}

export default App;
