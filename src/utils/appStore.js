import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  //reducer
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default appStore;
