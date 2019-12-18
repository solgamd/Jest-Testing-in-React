import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: true
        }
    };

    toggleIsShown = () => this.setState(({ isShown }) => ({ isShown: !isShown }));

    render() {
        const { isShown } = this.state;
        return (
            <div>
                <button onClick={this.toggleIsShown}>Toggle</button>
                { isShown && <div><p>Text Here</p></div> }
            </div>
        )
    }

}

export default Toggle;