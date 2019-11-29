import * as React from "react"
import Layout from "../components/Layout"
import List from "../components/List"
import {cheeseScones} from "../data/scones"

const CheeseScones: React.FunctionComponent = () => (
	<Layout title="Scone Hungus - Cheese scones">
		<h1>Cheese scones</h1>
		<List scones={cheeseScones} />
	</Layout>
)

export default CheeseScones
