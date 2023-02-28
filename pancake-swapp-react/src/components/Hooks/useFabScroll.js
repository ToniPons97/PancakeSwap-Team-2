import { useState, useEffect } from "react";


export const useFabScroll = () => {
    const [fabVisible, setFabVisible] = useState(false);
    const handleFabScrollEvent = () => {
      if (document.body.scrollTop >= 350 || document.documentElement.scrollTop >= 350)
          setFabVisible(true);
      else
          setFabVisible(false);
    }
    // Adding scroll event listener to this compoment when it mounts to render Fab conditionally.
    useEffect(() => {
      window.addEventListener('scroll', handleFabScrollEvent);

      return () => {
        window.removeEventListener('scroll', handleFabScrollEvent);
      }
    }, []);

    return {fabVisible, handleFabScrollEvent};
}