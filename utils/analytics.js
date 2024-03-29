import ReactGA from "react-ga"

export const initGA = () => {
	ReactGA.initialize("UA-162842795-1")
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
