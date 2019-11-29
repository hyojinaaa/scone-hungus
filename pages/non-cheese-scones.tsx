import * as React from "react"
import Layout from "../components/Layout"
import List from "../components/List"
import {nonCheeseScones} from "../data/scones"

const NonCheeseScones: React.FunctionComponent = () => (
	<Layout title="Scone Hungus - non cheese scones">
		<h1>Non-cheese scones</h1>
		<List scones={nonCheeseScones} />
	</Layout>
)

export default NonCheeseScones
