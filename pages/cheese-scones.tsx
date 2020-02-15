import * as React from "react"
import Layout from "../components/Layout"
import List from "../components/List"
import {cheeseScones} from "../data/scones"

const CheeseScones: React.FunctionComponent = () => (
	<Layout title="Scone Hungus - Cheese scones">
		<div
			style={{
				textAlign: "center",
				backgroundColor: "#444",
				color: "white",
				padding: "32px 0"
			}}>
			<h1>Cheese scones</h1>
		</div>
		<div style={{padding: "24px 24px 0"}}>
			<List scones={cheeseScones} />
		</div>
	</Layout>
)

export default CheeseScones
