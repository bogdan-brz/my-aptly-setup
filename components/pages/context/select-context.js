import React from "react";

const SelectContext = React.createContext({});

const SelectContextProvider = (props) => {
    return <SelectContext.Provider>{props.children}</SelectContext.Provider>;
};

export { SelectContextProvider };

export default SelectContext;
