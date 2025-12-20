import api from "../lib/api";

export const getRooms = () => {
  return api.get("/rooms");
};

export const addRoom = (data) => {
  return api.post("/rooms/add-room", data);
};

export const getRoomsByOwnerId = () => {
  return api.get("rooms/me");
};

export const getRoomById = (id) => {
  return api.get(`/room/${id}`);
};

export const editRoomById = ({ roomId, data }) => {
  return api.put(`rooms/edit/${roomId}`, data);
};

export const editRoomStatusById = (idRoom) => {
  return api.put(`room/edit-status/${idRoom}`);
};

export const deleteRoomById = (idRoom) => {
  return api.delete(`/rooms/delete/${idRoom}`);
};
