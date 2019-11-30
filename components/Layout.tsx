import * as React from "react"
import Head from "next/head"
import {Grommet, Anchor} from "grommet"
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
		<header>
			<nav>
				<Anchor href="/" label="Home" /> |{" "}
				<Anchor href="/cheese-scones" label="Cheese scones" /> |{" "}
				<Anchor href="/non-cheese-scones" label="Non-cheese scones" />
			</nav>
		</header>
		<main>{children}</main>
		<footer>
			<hr />
			<p>© 2019 SconeHungus</p>
			<br />
			<a href="mailto:muffinseoul@gmail.com" target="_blank" rel="noopener">
				Add my 2c
			</a>
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
