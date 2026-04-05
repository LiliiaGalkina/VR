import { useState, useEffect } from "react";

const useResponsiveEvent = (breakpoint: number) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= breakpoint);
	  };
	  
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [breakpoint]);

  return isMobileScreen;
};

export default useResponsiveEvent;
