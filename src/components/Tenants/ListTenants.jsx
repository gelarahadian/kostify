import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useGetTenantsByOwner } from '../../hooks/tenant.hook';
import { useNavigate } from 'react-router-dom';

const ListTenants = ({ onOpenDeleteDialog }) => {
  const navigate = useNavigate();
  const { data: tenants } = useGetTenantsByOwner();

  return (
    <div className="w-full mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-[#EAEAEA]">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-r  w-12">
                    No
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-r ">
                    Nama Lengkap
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-r ">
                    Alamat Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-r ">
                    No Telepon
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-r ">
                    Keterangan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 w-24">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {tenants?.map((tenant, index) => (
                  <tr key={tenant.tenant_id} className="">
                    <td className="px-4 py-3 text-sm text-gray-800 ">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800 ">
                      {tenant.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800 ">
                      {tenant.email}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800 ">
                      {tenant.phone}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800 ">
                      {tenant.keterangan}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center">
                        <button
                          onClick={() =>
                            navigate(
                              `/dashboard/tenants/${tenant.tenant_id}/edit`,
                            )
                          }
                          className="p-1.5 text-white rounded transition-colors"
                          title="Edit"
                        >
                          <Icon
                            icon="mdi:pencil-outline"
                            className="text-blue-500 hover:text-blue-600"
                            width="16"
                            height="16"
                          />
                        </button>
                        <button
                          onClick={() => onOpenDeleteDialog(tenant.tenant_id)}
                          className="p-1.5  text-white roundedtransition-colors"
                          title="Delete"
                        >
                          <Icon
                            icon="tabler:trash"
                            className="text-red-500 hover:text-red-600"
                            width="16"
                            height="16"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTenants;