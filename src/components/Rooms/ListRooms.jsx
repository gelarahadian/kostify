import React from 'react'

const ListRooms = ({rooms}) => {
  return (
    <div>
        {rooms?.map(room => (
            <div key={room.room_id}>{room.room_name}</div>
        ))}
    </div>
  )
}

export default ListRooms