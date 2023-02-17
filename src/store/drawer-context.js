import React, { useState } from "react";

export const drawerContext = React.createContext({
  open: false,
  setOpen: () => {},
});

const DrawerContextProvider = (props) => {
  const [dOpen, setdOpen] = useState(false);

  return (
    <drawerContext.Provider
      value={{
        open: dOpen,
        setOpen: setdOpen,
      }}
    >
      {props.children}
    </drawerContext.Provider>
  );
};

export default DrawerContextProvider;
