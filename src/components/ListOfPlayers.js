import React from "react";

const ListOfPlayers = ({ onDelete, list }) => (
    <ol>
        {list.sort((p1, p2) => p2.points > p1.points ? 1 : -1).map(({ name, points }, index) => {
            return <li key={index}>{name} - <em>{points}</em> <button onClick={() => {
                onDelete(name, points, index)
            }}>Delete</button>
            </li>
        })}
    </ol>
)

export default ListOfPlayers;
