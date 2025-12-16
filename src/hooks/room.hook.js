import { useMutation, useQuery } from "@tanstack/react-query";
import { addRoom, deleteRoomById, editRoomById, editRoomStatusById, getRoomById, getRooms, getRoomsByOwnerId } from "../services/room.service";

export const useGetRooms = () => useQuery({
    queryKey: ['rooms'],
    queryFn: getRooms
})

export const useAddRoom = () => useMutation({
    mutationFn: addRoom
})

export const useGetRoomsByOwnerId = (ownerId) => useQuery({
    queryKey: ['rooms', ownerId],
    queryFn: () => getRoomsByOwnerId(ownerId)
})

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