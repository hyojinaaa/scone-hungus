import * as React from "react"
import Layout from "../components/Layout"
import List from "../components/List"
import {nonCheeseScones} from "../data/scones"

const NonCheeseScones: React.FunctionComponent = () => (
	<Layout title="Scone Hungus - non cheese scones">
		<div
			style={{
				textAlign: "center",
				backgroundColor: "#444",
				color: "white",
				padding: "32px 0"
			}}>
			<h1>Non-cheese scones</h1>
		</div>
		<div style={{padding: "24px 24px 0"}}>
			<List scones={nonCheeseScones} />
		</div>
	</Layout>
)

export default NonCheeseScones
