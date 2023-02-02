import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };
    console.log("constructor was called");
  }

  componentDidMount() {
    //it was to do one time task

    //this will be ignored
    console.log("component did mount was called");
  }

  componentDidMount() {
    //it was to do one time task

    //this function value will replaced in the 'EXECUTION CONTEXT'
    console.log("component did mount was called 2");
  }

  componentDidUpdate() {
    //multiple times, after every re-render
    //to do something agter every re-render
    console.log("Component did update was called");
  }

  componentWillUnmount() {
    // one time
    // when component is just about to be removed from screen
    // database close that connection
  }

  render() {
    console.log("render was called");
    return (
      <div>
        <p className="abc"></p>
        <button
          onClick={() => {
            // document.querySelector(".abc").innerText = "changed"
            this.setState({ a: 2 });
          }}
        >
          Change State
        </button>
      </div>
    );
  }
}
