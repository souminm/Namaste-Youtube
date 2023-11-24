import appSlice from "./appSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
//reducer
reducer:{
    app: appSlice,
}
});

export default appStore;