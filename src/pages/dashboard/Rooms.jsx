import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import FilterRooms from "../../components/Rooms/FilterRooms";
import ListRooms from "../../components/Rooms/ListRooms";
import { useGetRooms } from "../../hooks/room.hook";
import DialogDetailRoom from "../../components/Rooms/DialogDetailRoom";

const Rooms = () => {
  const [selectedFilter, setSelectedFilter] = useState("semua");
  const [openDetailRoom, setOpenDetailRoom] = useState(0);

  const { data, isLoading } = useGetRooms();
  const rooms = data?.data?.data;
  console.log(rooms);
  return (
    <main className="px-12 pt-8 relative">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="font-semibold text-xl">Data Kamar</h1>
          <p className="font-light text-xs">
            Informasi seluruh data kamar dan fasilitas didalamnya
          </p>
        </div>
        <button>
          <Icon
            icon="icon-park-solid:add"
            className="text-[#3674B5]"
            width="40"
            height="40"
          />
        </button>
      </div>
      <FilterRooms
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <ListRooms rooms={rooms} setOpenDetailRoom={setOpenDetailRoom} />
      <DialogDetailRoom
        open={openDetailRoom ? true : false}
        onClose={() => setOpenDetailRoom(0)}
      />
    </main>
  );
};

export default Rooms;
