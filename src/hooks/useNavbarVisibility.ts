import { useEffect, useRef, useState } from "react";

export function useNavbarVisibility() {
    const [visible, setVisible] = useState(true);

    const previousScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {

            const current = window.scrollY;
            const threshold = window.innerHeight / 2;

            const delta = current - previousScroll.current;

            if (Math.abs(delta) < 40) return; // less than 40px change, ignore

            // Always show near the top
            if (current < threshold) {
                setVisible(true);
            } else {
                if (current > previousScroll.current) {
                    // scrolling down
                    setVisible(false);
                } else {
                    // scrolling up
                    setVisible(true);
                }
            }

            previousScroll.current = current;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return visible;
}