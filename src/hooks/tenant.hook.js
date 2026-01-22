import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTenant, deleteTenant, editTenant, getTenantById, getTenantsByOwner } from "../services/tenant.service";

export const useGetTenantsByOwner = () =>{
  const query = useQuery({
    queryKey: ["tenantsbyowner"],
    queryFn: getTenantsByOwner,
  });

  return query?.data?.data || [];
}

export const useGetTenantById = (id) => {
    const query = useQuery({
        queryKey: ["tenant", id],
        queryFn: () => getTenantById(id),
    })

    return query?.data?.data || [];
}

export const useAddTenant = () => useMutation({
    mutationFn: addTenant
})

export const useEditTenant = () => useMutation({
    mutationFn: editTenant
})

export const useDeleteTenant = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTenant,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tenantsbyowner"],
            });
        },
    })
}
