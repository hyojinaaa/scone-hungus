import * as React from "react"
import Link from "next/link"
import Head from "next/head"
import {Grommet} from "grommet"
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
				<Link href="/">
					<a>Home</a>
				</Link>{" "}
				|{" "}
				<Link href="/about">
					<a>About</a>
				</Link>{" "}
				|{" "}
				<Link href="/users">
					<a>Users List</a>
				</Link>
			</nav>
		</header>
		{children}
		<footer>
			<hr />
			<span>@@@@ Footer @@@@</span>
		</footer>
	</Grommet>
)

export default Layout
