import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type StatusType = 'idle' | 'failed' | 'succeeded' | 'loading';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle' as StatusType,
        error: null as string | null
    },
    reducers: {
        setAppStatus(state, action: PayloadAction<StatusType>) {
            state.status = action.payload;
        },
        setAppError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;

        },
    }
})

export const {setAppStatus, setAppError} = appSlice.actions
export default appSlice.reducer