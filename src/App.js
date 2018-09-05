import React, { Component } from 'react';
// import EventPractice from './EventPractice';
// import MyComponent from './MyComponent'
// import ValidationSample from "./ValidationSample";
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';
import LifeCircleSample from './LifeCircleSample';


const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 1677215).toString(16);
};

class App extends Component {

    state = {
        color: '#000000'
    };

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    };

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

          {/*<ValidationSample/>*/}

          {/*<ScrollBox ref={(ref) => this.scrollBox = ref}/>
          <button onClick={() => this.scrollBox.ScrollToBottom()}>
              맨 밑으로
          </button>*/}

          {/*<IterationSample/>*/}

          <button onClick={this.handleClick}>랜덤색상</button>
          <LifeCircleSample color={this.state.color}/>

      </div>
    );
  }
}

export default App;
