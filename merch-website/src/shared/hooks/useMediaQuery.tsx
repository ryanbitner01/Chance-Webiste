import { useEffect, useState } from "react";

export const useMediaQuery = (maxWdith: number) => {
	const query = `(max-width: ${maxWdith}px)`;

	const [matches, setMatches] = useState(() => {
		if (typeof window === "undefined") return false;
		return window.matchMedia(query).matches;
	});

	useEffect(() => {
		const media = window.matchMedia(query);

		const handler = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		setMatches(media.matches);

		if (media.addEventListener) {
			media.addEventListener("change", handler);
		} else {
			media.addListener(handler);
		}

		return () => {
			if (media.removeEventListener) {
				media.removeEventListener("change", handler);
			} else {
				media.removeListener(handler);
			}
		};
	}, [query]);

	return matches;
};
