const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
    name : 'app',
    initialState : {
        isMenuOpen : true,
    },
    reducers:{
        //actions
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state) =>{
            state.isMenuOpen = false;
        }
    }
})

export const {toggleMenu,closeMenu} = appSlice.actions;
export default appSlice.reducer;