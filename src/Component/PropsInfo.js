import React, { Component } from 'react';

class PropsInfo extends Component {
    render(){
        return (
            <div className="props-info">
                <h2>Props</h2>
                <p>The main difference between state and props is that props are immutable. This is why the container component should define the state that can be updated and changed, while the child components should only pass data from the state using props.</p>
            </div>
        )
    }
}

export default PropsInfo;