import * as React from "react"
import {Heading, Button, Anchor} from "grommet"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import {NextPage} from "next"
import {cheeseScones, nonCheeseScones} from "../data/scones"
import {Scone} from "../interfaces"

const IndexPage: NextPage = () => {
	const [randomScone, setRandomScone] = React.useState<Scone | undefined>()
	const [loadingState, setLoadingState] = React.useState<boolean>(false)

	const displayRandomScone = () => {
		const sconeArray = [...cheeseScones, ...nonCheeseScones]
		const scone = sconeArray[Math.floor(Math.random() * sconeArray.length)]
		setLoadingState(true)
		setRandomScone(undefined)
		setTimeout(() => {
			setLoadingState(false)
			setRandomScone(scone)
		}, 3000)
	}

	return (
		<Layout title="Scone Hungus">
			<Heading>Kia ora, Scone Hungus 👋</Heading>
			<div style={{textAlign: "center", padding: "24px"}}>
				<Button primary label="Show me a scone" onClick={displayRandomScone} />
				<div className="randomSconeContainer">
					{loadingState && <Loader />}
					{randomScone && (
						<div className="scone">
							<img src={`/${randomScone.image}`} />
							<h3>{randomScone.placeName}</h3>
							<Anchor href={randomScone.placeAddress} label="Location" />
							{randomScone.flavour && (
								<p>
									<strong>Flavour: </strong>
									{randomScone.flavour}
								</p>
							)}
							<p>
								<strong>Rating: </strong>
								{randomScone.rating} / 5
							</p>
							{randomScone.note && randomScone.note}
						</div>
					)}
				</div>
			</div>
			<style jsx>{`
				.randomSconeContainer {
					width: 500px;
					max-width: 500px;
					height: 500px;
					margin: 32px auto;
					border: 1px solid #444;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				img {
					width: 300px;
					height: 300px;
				}
			`}</style>
		</Layout>
	)
}

export default IndexPage
