import { createContext } from "react";

const UserContext = createContext({
    loggedInInfo : "Default user",
});
export default UserContext;