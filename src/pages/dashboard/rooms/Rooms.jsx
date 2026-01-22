import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import FilterRooms from "../../../components/Rooms/FilterRooms";
import ListRooms from "../../../components/Rooms/ListRooms";
import { useGetRoomsByOwnerId } from "../../../hooks/room.hook";
import { Outlet, useNavigate } from "react-router-dom";

const Rooms = () => {
  const [selectedFilter, setSelectedFilter] = useState("semua");
  const navigate = useNavigate();

  const { data: rooms, isLoading } = useGetRoomsByOwnerId();
  return (
    <main className="px-12 pt-8 relative">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="font-semibold text-xl">Data Kamar</h1>
          <p className="font-light text-xs">
            Informasi seluruh data kamar dan fasilitas didalamnya
          </p>
        </div>
        <button onClick={() => navigate("/dashboard/rooms/add")}>
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
      <ListRooms rooms={rooms} />
      <Outlet />
    </main>
  );
};

export default Rooms;
