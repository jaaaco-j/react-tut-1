
import React from "react";

class AddPlayer extends React.Component {
    state = {
        name: '',
        points: '0'
    }
    render() {
        const isPlayerNameUnique = name => {
            for (let i = 0; i < this.props.list.length; i++) {
                if (this.props.list[i].name === name) {
                    return false
                }
            }
            return true
        }
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
                    } else if (!isPlayerNameUnique(this.state.name)) {
                        alert('Please enter unique player name!')
                        return
                    } else if (!this.state.points || parseInt(this.state.points) < 0) {
                        alert("please enter valid number of points")
                        return
                    }
                    this.props.onPlayerAdd(this.state.name, parseInt(this.state.points))
                    this.setState({ name: '', points: '0' })
                }}>Submit to Us</button>
            </>
        )
    }
}

export default AddPlayer
