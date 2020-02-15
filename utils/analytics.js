import ReactGA from "react-ga"

export const initGA = () => {
	ReactGA.initialize("UA-158585591-1")
}
export const logPageView = () => {
	ReactGA.set({page: window.location.pathname})
	ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category = "", action = "") => {
	if (category && action) {
		ReactGA.event({category, action})
	}
}
