import React, { Component } from 'react';
import ValidationSample from "./ValidationSample";
// import MyComponent from './MyComponent'
// import EventPractice from './EventPractice';

class App extends Component {
  render() {

    /*const text =  '당신은 어썸한가요';
    const flag = true;
    const style = {
        backgroundColor: 'gray',
        color: 'green'
    }*/

    return (
      <div className="App">
          {/*<h1>리액트 안녕</h1>
          <h2 style={ style }>{ text }</h2>
          {
              flag ? 'true' : 'false'
          }
          <br/>
          {
              flag && '보여주세요'
          }*/}

          {/*<MyComponent/>*/}

          {/*<EventPractice/>*/}

          <ValidationSample/>

      </div>
    );
  }
}

export default App;
