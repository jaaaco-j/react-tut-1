import React from "react";

class AddPlayer extends React.Component {
    state = {
        name: '',
        points: '0'
    }
    render() {
        return (
            <>
                <input type="text" value={this.state.name} placeholder="Player name" onChange={event => {
                    this.setState({ name: event.currentTarget.value })
                }}/>
                <input onChange={event => {
                    this.setState({ points: event.currentTarget.value })
                }} type="number" value={this.state.points} placeholder="Points" />
                <button onClick={() => {
                    if (!this.state.name) {
                        alert('Please enter player name!')
                        return
                    }
                    this.props.onPlayerAdd(this.state.name, this.state.points)
                    this.setState({ name: '', points: '0' })
                }}>Submit to Us</button>
            </>
        )
    }
}

export default AddPlayer
