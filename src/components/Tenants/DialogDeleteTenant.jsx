import { Icon } from '@iconify/react'
import React from 'react'
import { useDeleteTenant } from '../../hooks/tenant.hook';
import { useQueryClient } from '@tanstack/react-query';

const DialogDeleteTenant = ({onClose, tenantId}) => {
  const queryClient = useQueryClient();
  const { mutate: deleteTenant, status } = useDeleteTenant();

  const handleDelete = (id) => {
    deleteTenant(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["tenantsbyowner"],
        });
        onClose();
      }
    });
  }
  return (
    <div className={` ${tenantId ? "block" : "hidden"} absolute inset-0 z-10 h-[calc(100vh-100px)] flex justify-center items-center backdrop-blur-sm bg-white/10`}>
      <div className="relative bg-white max-w-2xl w-full rounded-xl overflow-hidden shadow-md">
        {/* Close */}
        <div className="absolute right-3 top-3 z-10">
          <button
            onClick={onClose}
            className="rounded-full p-1 backdrop-blur-md bg-white/60 hover:bg-white/80 transition"
          >
            <Icon icon="material-symbols:close-rounded" width="24" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="font-semibold text-xl mb-2">Hapus Data Penghuni</h2>
          <p className="font-light text-xs mb-4">
            Apakah Anda yakin ingin menghapus data penghuni ini?
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="h-12 flex-1 bg-gray-200 hover:bg-gray-300 text-white rounded-md transition"
            >
              Batal
            </button>
            <button
              onClick={() => handleDelete(tenantId)}
              className="h-12 flex-1 bg-red-600 hover:bg-red-600/90 text-white rounded-md transition"
            >
              {status === "loading" ? "Loading..." : "Hapus"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogDeleteTenant