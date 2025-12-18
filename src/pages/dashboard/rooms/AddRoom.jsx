import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useAddRoom } from "../../../hooks/room.hook";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddRoom = () => {
    const navigate = useNavigate()
  const { mutate: addRoom, status } = useAddRoom();

  const [form, setForm] = useState({
    room_name: "",
    price: "",
    status: "empty",
    facilities: "",
    description: "",
    floor: "", 
    capacity: ""
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    if (!e.target.files) return;
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("room_name", form.room_name);
    formData.append("price", form.price);
    formData.append("status", form.status);
    formData.append("facilities", form.facilities);
    formData.append("description", form.description);
    formData.append("floor", form.floor);
    formData.append("capacity", form.capacity);

    images.forEach((file) => {
      formData.append("images", file);
    });

    addRoom(formData, {
        onSuccess: (res) => {
            setForm({
                room_name: "",
                price: "",
                status: "empty",
                facilities: "",
                description: "",
                floor: "", 
                capacity: ""
            })
            console.log(res);
            setImages([])
            navigate('/dashboard/rooms')
        },
        onError: (err) => {
            toast.error(err.response.data.message); 

        }
    });
  };

  return (
    <main className="px-12 pt-8">
      <h1 className="font-semibold text-xl mb-1">Tambah Kamar</h1>
      <p className="text-xs text-gray-500 mb-6">
        Informasi seluruh data kamar dan fasilitas didalamnya
      </p>

      <div className="bg-white shadow-md p-9 rounded-xl">
        <form onSubmit={handleSubmit} className="flex gap-10">
          {/* Upload Image */}
          <label htmlFor="input-image" className="cursor-pointer">
            <div className="flex justify-center items-center w-60 h-60 bg-gray-200 rounded-lg">
              <div className="text-center">
                <Icon
                  icon="material-symbols:cloud-upload"
                  width={24}
                  className="mx-auto text-gray-500"
                />
                <p className="text-gray-500 text-sm mt-2">
                  Upload Image ({images.length})
                </p>
              </div>
            </div>
            <input
              id="input-image"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          {/* Form */}
          <div className="flex-1 space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium">Nama Kamar</label>
                <input
                  name="room_name"
                  value={form.room_name}
                  onChange={handleChange}
                  placeholder="West-002"
                  className="w-full border rounded-md px-4 py-2 text-sm"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Harga /bulan</label>
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="900000"
                  className="w-full border rounded-md px-4 py-2 text-sm"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Lantai</label>
                <select
                  name="floor"
                  value={form.floor}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Pilih data nya</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Kapasitas</label>
                <select
                  name="capacity"
                  value={form.capacity}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Pilih data nya</option>
                  <option value={1}>1 Orang</option>
                  <option value={2}>2 Orang</option>
                  <option value={3}>3 Orang</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Fasilitas</label>
              <textarea
                name="facilities"
                value={form.facilities}
                onChange={handleChange}
                rows={3}
                placeholder="AC, TV"
                className="w-full border rounded-md px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Deskripsi</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="comfortable room"
                className="w-full border rounded-md px-4 py-2 text-sm"
              />
            </div>

            <div className="pt-3 flex justify-end space-x-3 ">
              <button
              type="button"
              onClick={() => navigate("/dashboard/rooms")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md text-sm"
              >
                Batal
              </button>
              <button
                disabled={status === "pending"}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md text-sm"
              >
                {status === "pending" ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddRoom;
