import React from "react";

const ListOfPlayers = ({ onDelete, list }) => (
    <>
        { list.length ? (
            <ol>
            {list.sort((p1, p2) => p2.points > p1.points ? 1 : -1).map(({ name, points }, index) => {
                return <li className="mb-2" key={index}>{name} - <em>{points}</em> <button className="btn btn-danger btn-sm" onClick={() => {
                    onDelete(name, points, index)
                }}>Delete</button>
                </li>
            })}
            </ol> 
        ) : (
            <p> The List is empty! </p>
        )
        }
    </>
)

export default ListOfPlayers;
