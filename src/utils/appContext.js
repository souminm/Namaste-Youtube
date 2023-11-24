import { createContext } from "react";

const appContext = createContext({
    isMenuOpen : true,
    closeMenu : false
})

export default appContext;