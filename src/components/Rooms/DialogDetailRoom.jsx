import { Icon } from "@iconify/react";
import React from "react";

const DialogDetailRoom = ({ open, onClose }) => {
  return (
    <div
      className={`absolute flex justify-center items-center inset-0 backdrop-blur-sm z-10 bg-white/10 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="relative bg-white max-w-2xl w-full rounded-xl overflow-hidden">
        <div className="absolute right-3 top-3">
          <button
            onClick={onClose}
            className="backdrop-blur-md bg-white/50 hover:bg-white/70 transition duration-200"
          >
            <Icon
              icon="material-symbols:close-rounded"
              width="24"
              height="24"
            />
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/djyadok76/image/upload/v1765769966/kostify/rooms/lezslcejfet6iaysggxt.jpg"
          alt="test"
          className="h-96 w-full object-cover"
        />
        <div className="px-4 py-6">
          <h1 className="font-semibold text-3xl mb-3">Kamar 01</h1>
          <h2 className="font-medium text-xl mb-3">Rp 700.000</h2>
          <p className="text-base font-normal mb-3 text-gray-900">
            Lantai 1 || 1 Orang
          </p>
          <p className="text-base font-normal mb-4 text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
            cum voluptatem velit quo necessitatibus consequuntur amet tenetur
            temporibus impedit? Dolorem debitis vero impedit quia libero
            quisquam, obcaecati nostrum minus!
          </p>
          <div className="flex gap-3 w-full">
            <button className="h-12 flex-1 bg-red-600 hover:bg-red-600/90 text-white transition duration-200">
              Hapus
            </button>
            <button className="h-12 flex-1 bg-blue-600 hover:bg-blue-600/90 text-white transition duration-200">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogDetailRoom;
