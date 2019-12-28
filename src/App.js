import React, { useState } from 'react';
import ListOfPlayers from './components/ListOfPlayers'
import AddPlayers from './components/AddPlayers'

// TODO: Move it to separate file
const Title = ({ text = 'No text' }) => <h1>{text}</h1>

const App = () => {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("lista")) || [])

    const handlePlayerAdd = (name, points) => {
        const newList = [...list]
        newList.push({ name, points })
        setList(newList)
        localStorage.setItem("lista", JSON.stringify(newList))
    }

    const handleDelete = (name, points) => {
        const newList = [...list]
        newList.map((player, index) => {
            if (player.points === points && player.name === name) {
                newList.splice(index, 1)
                setList(newList)
                localStorage.setItem("lista", JSON.stringify(newList))
            }
        })
    }

    return (
        <div className="container">
            <Title text="Hall of fame" />
            <ListOfPlayers onDelete={handleDelete} list={list}/>
            <AddPlayers onPlayerAdd={handlePlayerAdd} list={list}/>
            <p>
                &copy; Copyright by Miłosz W. 2019
            </p>
        </div>
    )
}

export default App;
