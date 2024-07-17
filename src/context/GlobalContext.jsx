import React, { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [videosDeGaleria, setVideosDeGaleria] = useState([]);
    const [videosDeHero, setVideosDeHero] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch("http://localhost:3000/videos");
                const data = await response.json();
                setVideosDeGaleria(data);
                setVideosDeHero(data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        const intervalId = setInterval(fetchVideos, 5000);
        fetchVideos(); // Initial fetch

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <GlobalContext.Provider value={{ videosDeGaleria, setVideosDeGaleria, videosDeHero, setVideosDeHero }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
export { GlobalContext };