import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Try to scroll immediately
        window.scrollTo(0, 0);

        // Fallback in case the first attempt fails
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}