import React, { useState } from 'react';
import ListOfPlayers from './components/ListOfPlayers'
import AddPlayers from './components/AddPlayers'

const Title = ({ text = 'No text' }) => <h1>{text}</h1>

const App = () => {
    const [list, setList] = useState([
        { name: 'Tomasz Wietrzyk', points: 1 },
        { name: 'Dorota Wietrzyk', points: 2 },
        { name: 'Jakub Wietrzyk', points: 123 },
        { name: 'Milosz Wietrzyk', points: 1234 },
        { name: 'Mateusz Wietrzyk', points: 12 }
    ])

    const handlePlayerAdd = (name, points) => {
        const newList = [...list]
        newList.push({ name, points })
        setList(newList)
    }

    const handleDelete = (name, points) => {
        const newList = [...list]
        newList.map((player, index) => {
            if (player.points == points && player.name === name) {
                newList.splice(index, 1)
                setList(newList)
            }
        })
    }

    return (
        <>
            <Title text="Hall of fame" />
            <ListOfPlayers onDelete={handleDelete} list={list}/>
            <AddPlayers onPlayerAdd={handlePlayerAdd}/>
            <p>
                &copy; Copyright by Miłosz W. 2019
            </p>
        </>
    )
}

export default App;
