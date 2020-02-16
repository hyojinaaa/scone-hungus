import * as React from "react"
import Head from "next/head"
import {Grommet, Anchor} from "grommet"
import {Menu} from "grommet-icons"
import Drawer from "@material-ui/core/Drawer"
import {theme} from "./Theme"
import {initGA, logPageView} from "../utils/analytics"
import useMediaQuery from "@material-ui/core/useMediaQuery"

type Props = {
	title?: string
}

const Layout: React.FunctionComponent<Props> = ({
	children,
	title = "Scone Hungus"
}) => {
	const isNotMobile = useMediaQuery("(min-width:600px)")
	const [isGAInitialised, setIsGAInitialised] = React.useState(false)
	const [showSideMenu, setShowSideMenu] = React.useState(false)

	React.useEffect(() => {
		if (!isGAInitialised) {
			initGA()
			setIsGAInitialised(true)
		}
		logPageView()
	}, [])

	const toggleDrawer = (open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent
	) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return
		}

		setShowSideMenu(open)
	}

	const sideMenu = () => (
		<div
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
			style={{
				width: "250px",
				padding: "24px 32px 0 12px",
				boxSizing: "border-box"
			}}>
			<Anchor
				href="/"
				label="Home"
				style={{
					padding: "8px 16px",
					display: "block",
					fontFamily: "Inconsolata, monospace",
					color: "#444"
				}}
			/>
			<Anchor
				href="/cheese-scones"
				label="Cheese scones"
				style={{
					padding: "8px 16px",
					display: "block",
					fontFamily: "Inconsolata, monospace",
					color: "#444"
				}}
			/>
			<Anchor
				href="/non-cheese-scones"
				label="Non-cheese scones"
				style={{
					padding: "8px 16px",
					display: "block",
					fontFamily: "Inconsolata, monospace",
					color: "#444"
				}}
			/>
			<Anchor
				href="mailto:muffinseoul@gmail.com"
				target="_blank"
				rel="noopener"
				label="Add my 2c"
				style={{
					padding: "8px 16px 16px",
					display: "block",
					fontFamily: "Inconsolata, monospace",
					color: "#444"
				}}
			/>
		</div>
	)

	return (
		<Grommet theme={theme} full>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Scone Hungus is the most popular scone rating website in Wellington."
				/>
			</Head>
			<header style={{padding: 0}}>
				{isNotMobile ? (
					<nav
						style={{
							margin: "16px 24px",
							display: "flex",
							justifyContent: "space-between"
						}}>
						<div>
							<Anchor href="/" label="Home" style={{marginRight: "32px"}} />
							<Anchor
								href="/cheese-scones"
								label="Cheese scones"
								style={{marginRight: "32px"}}
							/>
							<Anchor href="/non-cheese-scones" label="Non-cheese scones" />
						</div>
						<Anchor
							href="mailto:muffinseoul@gmail.com"
							target="_blank"
							rel="noopener"
							label="Add my 2c"
						/>
					</nav>
				) : (
					<>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								padding: "16px",
								alignItems: "center"
							}}>
							<Anchor
								href="/"
								label="Scone Hungus"
								style={{fontSize: "20px"}}
							/>
							<Menu
								style={{marginBottom: "-2px"}}
								onClick={toggleDrawer(true)}
							/>
						</div>
						<Drawer open={showSideMenu} onClose={toggleDrawer(false)}>
							{sideMenu()}
						</Drawer>
					</>
				)}
			</header>
			<main style={{padding: "0"}}>{children}</main>
			<footer>
				<p>© 2020 SconeHungus</p>
			</footer>
			<style global jsx>{`
				header,
				main,
				footer {
					padding: 24px;
				}
				footer {
					background-color: #444;
					color: white;
					text-align: center;
				}
			`}</style>
		</Grommet>
	)
}

export default Layout
