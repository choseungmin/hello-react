import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    constructor(props) {
        super(props)
    };

    static defaultProps = {
        name: 'seung min 2'
    };

    render() {
        return (
            <div>
                Hello, My name is {this.props.name}
            </div>
        )
    }

};

MyComponent.defaultProps = {
    name: 'seung min'
};

MyComponent.propTypes= {
    name: PropTypes.string,
    age: PropTypes.number.isRequird
};

export default MyComponent;