import api from "../lib/api";

export const getTenantsByOwner = () => {
  return api.get("/tenants");
};

export const getTenantById = (id) => {
    return api.get(`/tenant/${id}`);
};

export const addTenant = (data) => {
    return api.post("/tenants/add-tenant", data);
};

export const editTenant = ({tenantId, data}) => {
    return api.patch(`/tenant/${tenantId}`, data);
};

export const deleteTenant = (id) => {
    return api.delete(`/tenant/${id}`);
};
