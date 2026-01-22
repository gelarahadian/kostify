import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import ListTenants from '../../../components/Tenants/ListTenants';
import DialogDeleteTenant from '../../../components/Tenants/DialogDeleteTenant';
import { useState } from 'react';

const Tenants = () => {
  const navigate = useNavigate();
  const [tenantId, setTenantId] = useState(null);
  console.log(tenantId);

  const handleOpenDeleteDialog = (id) => {
    setTenantId(id);
  };

  const handleCloseDeleteDialog = () => {
    setTenantId(null);
  };

  return (
    <main className="px-12 pt-8 relative">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="font-semibold text-xl">Data Penghuni</h1>
          <p className="font-light text-xs">Informasi seluruh data penghuni</p>
        </div>
        <button onClick={() => navigate("/dashboard/tenants/add")}>
          <Icon
            icon="icon-park-solid:add"
            className="text-[#3674B5]"
            width="40"
            height="40"
          />
        </button>
      </div>
      <ListTenants onOpenDeleteDialog={handleOpenDeleteDialog} />
      <DialogDeleteTenant onClose={handleCloseDeleteDialog} tenantId={tenantId} />
    </main>
  );
}

export default Tenants