import { useMutation, useQuery } from "@tanstack/react-query";
import { addRoom, deleteRoomById, editRoomById, editRoomStatusById, getRoomById, getRooms, getRoomsByOwnerId } from "../services/room.service";

export const useGetRooms = () => {
  const query = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  return query.data.data;
};

export const useAddRoom = () =>
  useMutation({
    mutationFn: addRoom,
  });

export const useGetRoomsByOwnerId = () => {
  const query = useQuery({
    queryKey: ["roomsbyownerid"],
    queryFn: getRoomsByOwnerId,
  });

  return query?.data?.data || [];
};

export const useGetRoomById = (id) => useQuery({
    queryKey: ['room', id],
    queryFn: () => getRoomById(id)
})

export const useEditRoomById = () => useMutation({
    mutationFn: editRoomById
})

export const useEditRoomStatusById = () => useMutation({
    mutationFn: editRoomStatusById
})

export const useDeleteRoomById = () => useMutation({
    mutationFn: deleteRoomById
})