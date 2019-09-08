import React from 'react';

class PlayWithData extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {

        return (
            <div>
                
                <h3>Number: {this.props.data.id}</h3>
                
                <h3>Title: {this.props.data.title}</h3>

                <h3>Text: {this.props.data.text}</h3>

                <hr/>
            </div>
        )
    }
}

export default PlayWithData 