import { Icon } from "@iconify/react";
import React from "react";

const ListRooms = ({ rooms, setOpenDetailRoom }) => {
  return (
    <div className="flex flex-wrap gap-3 ">
      {rooms?.map((room) => (
        <div
          className="flex flex-col w-72 shadow-md bg-white rounded-xl p-4"
          key={room.room_id}
        >
          <img
            src={room.image_url[0]}
            alt="room_image"
            className="h-40 object-cover rounded-md mb-3"
          />
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-xl">Kamar 1</h1>
            <p className="font-normal text-xs flex space-x-2">
              <Icon icon="iconamoon:profile-thin" width="16" height="16" />
              <span>1 orang</span>
            </p>
          </div>
          <h2 className="text-sm font-light mb-2">Rp 700.000/bulan</h2>
          <p className="mb-4">{room.description}</p>
          <button
            onClick={() => setOpenDetailRoom(room.room_id)}
            className="h-10 rounded-md w-full flex justify-center items-center bg-[#578FCA] text-white mt-auto hover:bg-[#578FCA]/90 transition duration-200"
          >
            Detail
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListRooms;
