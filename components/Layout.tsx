import * as React from "react"
import Head from "next/head"
import {Heading, Grommet, Anchor} from "grommet"
import {theme} from "./Theme"

type Props = {
	title?: string
}

const Layout: React.FunctionComponent<Props> = ({
	children,
	title = "Scone Hungus"
}) => (
	<Grommet theme={theme} full>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<header style={{padding: 0}}>
			<nav
				style={{
					margin: "16px 24px",
					display: "flex",
					justifyContent: "space-between"
				}}>
				<div>
					<Anchor href="/" label="Home" style={{marginRight: "24px"}} />
					<Anchor
						href="/cheese-scones"
						label="Cheese scones"
						style={{marginRight: "24px"}}
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
			<div
				style={{
					textAlign: "center",
					backgroundColor: "#444",
					color: "white",
					padding: "48px 0"
				}}>
				<Heading>Scone Hungus</Heading>

				<p>The most popular scone rating website in Wellington</p>
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

export default Layout
