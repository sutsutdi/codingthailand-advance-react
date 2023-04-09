import { createSlice } from "@reduxjs/toolkit"
import Account from "../../interfaces/account.type"
import { RootState } from "../store"



export interface authState {
    isAuthLoading: boolean
    account: Account | null
}

const initialState: any = {
    isAuthLoading: true,
    account: {
        firstName: 'Suthee',
        lastName: 'Suddee',
    }   
    ,

}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {}

})


export const  selectAuthState = (state: RootState)=> state.auth

export default authSlice.reducer