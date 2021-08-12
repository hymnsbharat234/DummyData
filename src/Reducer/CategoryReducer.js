import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import url from "../../Data/data.json"

console.log("url",url)
const initialState={
    loading: false,
}
export const BussinessStore= createAsyncThunk(
    "BussinessStore",
    async()=>{
       
       
        const response =url

        console.log("response",response)
        return response
       
    
        
    }
)
const HomeReducer=createSlice({
    name:'Home',
    initialState,
    reducers:{},
    extraReducers:{
        [BussinessStore.fulfilled]:(state, { payload:CategoriesProduct})=>{
            if(CategoriesProduct.status){
                state.CategoriesProduct=CategoriesProduct
            }else{
                state.CategoriesProduct=CategoriesProduct
            }

        },
        [BussinessStore.pending]:(state, action)=>{
            state.loading=true

        },

    }
})
export default HomeReducer.reducer