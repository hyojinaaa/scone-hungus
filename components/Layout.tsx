import * as React from "react"
import Head from "next/head"
import {
	Heading,
	Grommet,
	Anchor,
	Accordion,
	AccordionPanel,
	Button
} from "grommet"
import {useMediaQuery} from "react-responsive"
import {theme} from "./Theme"

type Props = {
	title?: string
}

const Layout: React.FunctionComponent<Props> = ({
	children,
	title = "Scone Hungus"
}) => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-device-width: 1224px)"
	})

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
				{isDesktopOrLaptop ? (
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
					<Accordion>
						<AccordionPanel label="Menu" style={{padding: "0 8px"}}>
							<Anchor href="/" label="Home" style={{padding: "8px 16px"}} />
							<Anchor
								href="/cheese-scones"
								label="Cheese scones"
								style={{padding: "8px 16px"}}
							/>
							<Anchor
								href="/non-cheese-scones"
								label="Non-cheese scones"
								style={{padding: "8px 16px"}}
							/>
							<Anchor
								href="mailto:muffinseoul@gmail.com"
								target="_blank"
								rel="noopener"
								label="Add my 2c"
								style={{padding: "8px 16px 16px"}}
							/>
						</AccordionPanel>
					</Accordion>
				)}
				<div
					style={{
						textAlign: "center",
						backgroundColor: "#444",
						color: "white",
						padding: "48px 0"
					}}>
					<Heading>Scone Hungus</Heading>

					<p style={{padding: "0 16px"}}>
						The most popular scone rating website in Wellington
					</p>

					<Button
						style={{backgroundColor: "white", margin: "24px auto"}}
						label="Geeze at the cheese"
						href="/cheese-scones"
					/>
				</div>
			</header>
			<main>{children}</main>
			<footer>
				<hr />
				<p>© 2020 SconeHungus</p>
			</footer>
			<style global jsx>{`
				header,
				main,
				footer {
					padding: 24px;
				}
				footer {
					text-align: center;
				}
			`}</style>
		</Grommet>
	)
}

export default Layout
