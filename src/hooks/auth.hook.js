import { useMutation } from "@tanstack/react-query"
import {signIn, signUp } from "../services/auth.services"

export const useSignIn = () => {
    return useMutation({
        mutationFn: signIn
    })
}

export const useSiginUp = () => {
    return useMutation({
        mutationFn: signUp
    })
}