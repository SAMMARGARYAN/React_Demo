import React from "react";
import "./app.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myGreeting: "My name is...",
      people: [{ name: "Samvel" }, { name: "Karen" }, { name: "Lilit" }],
    };
  }

  handlClick = () => {
    this.setState({ myGreeting: "My name is Samvel Margaryan" });
  };

  render() {
    console.log(this.state.people);
    return (
      <div className="app">
        <div>
          <h1>{this.state.myGreeting}</h1>
        </div>

        {this.state.people.map((person, idx) => {
          return  <div key ={idx}><h1>{person.name + `${idx}`}</h1></div>;
        })}

        <button onClick={this.handlClick}>Change state content</button>
      </div>
    );
  }
}

// function App() {

// const myGreeting = 'Hello World!!!';

//   return <div className="app">

//     <h1>{myGreeting}</h1>

//   </div>;
// }

export default App;
