// src/hooks/use-mobile.ts
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );

    const onChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", onChange);
    setIsMobile(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
