import React, { useState, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
    const [images, setImages] = useState([]);

    return (
        <StateContext.Provider value={[images, setImages]}>
            {props.children}
        </StateContext.Provider>
    )
}