import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0,
    //     }
    // };

    static defaultProps = {
        name: 'seung min 2'
    };

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequird
    };

    state = {
        number: 0
    };

    render() {
        return (
            <div>
                <p>Hello, My name is { this.props.name }</p>
                <p>Iam { this.props.age } Years old</p>
                <p>Number: { this.state.number }</p>
                <button onClick = {() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>더하기</button>

            </div>
        )
    }

};

// MyComponent.defaultProps = {
//     name: 'seung min',
//     age: 18
// };

MyComponent.propTypes= {
    name: PropTypes.string,
    age: PropTypes.number.isRequird
};

export default MyComponent;