import React, { Component } from 'react';

export default class Orders extends Component {

    // The name of this function
    static displayName = Orders.name;

    // Constructor
    constructor(props) {
        super(props);
    }

    // The view content to renders
    render() {
        return (
            <>
                <h1>Order 3126</h1>
                <h1>Order 4356</h1>
                <h1>Order 1276</h1>
            </>
        )
    }
}
