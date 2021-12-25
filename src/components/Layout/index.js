import React, { Component } from 'react';
import { Content } from './LayoutElements';

export default class ContentView extends Component {

    // Constructor
    constructor(props) {
        super(props);
    }

    // Renders the content view
    render() {
        return (
            <>
                <Content>
                    { this.props.children }
                </Content>
            </>
        );
    }
}

// function ContentView() {
//     return (
//         <main className="ant-layout-content" style={{ margin: '24px 16px 0 216px', overflow: 'initial', padding: '24px 50px', background: '#f0f2f5' }}>
//             { this.props.children }
//         </main>
//     )
// }

// export default ContentView;

