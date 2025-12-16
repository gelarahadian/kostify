import { useMutation } from "@tanstack/react-query"
import { signIn, signUp } from "../services/auth.service";

export const useSignIn = () => {
    return useMutation({
        mutationFn: signIn
    })
}

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};