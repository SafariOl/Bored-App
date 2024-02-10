import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type BoredType = {
    activity: string;
    type: string;
    participants: number;
    price: number;
    key: string;
    accessibility: number;
}

export const boredReducerFetch = createAsyncThunk<BoredType, string, {rejectValue: string}>(
    'src/boredReducerFetch',
    async function (type, {rejectWithValue}) {
        let response
        
        if(type === 'random'){
            response = await fetch(`https://www.boredapi.com/api/activity`)
        }
        else  if(type !== ''){
            response = await fetch(`https://www.boredapi.com/api/activity?type=${type}`)
        }
        else{
            response = await fetch(`https://www.boredapi.com/api/activity`)
        }

        if(!response.ok){
            return rejectWithValue("Error 500!!!")
        }

        const data = await response.json();
        return data
    }
)


type BoredCardType = {
    card: BoredType[],
    loading: boolean,
    error: boolean
}


const initialState:BoredCardType = {
    card: [],
    loading: false,
    error: false
}

const boredReducer = createSlice({
    name: 'bored',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(boredReducerFetch.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(boredReducerFetch.fulfilled, (state, action) => {
                state.loading = false
                state.card = [{...action.payload}]
                state.error = false
            })
            .addCase(boredReducerFetch.rejected, (state, action) => {
                state.card = []
                state.error = true
            })
    }
})


export default boredReducer.reducer
