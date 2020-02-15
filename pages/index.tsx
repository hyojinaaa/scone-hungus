import * as React from "react"
import {Button, Anchor} from "grommet"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import {NextPage} from "next"
import {cheeseScones, nonCheeseScones} from "../data/scones"
import {Scone} from "../interfaces"

const IndexPage: NextPage = () => {
	const sconeArray = [...cheeseScones, ...nonCheeseScones]
	const scone = sconeArray[Math.floor(Math.random() * sconeArray.length)]
	const [randomScone, setRandomScone] = React.useState<Scone | undefined>(scone)
	const [loadingState, setLoadingState] = React.useState<boolean>(false)

	const displayRandomScone = () => {
		setLoadingState(true)
		setRandomScone(undefined)
		setTimeout(() => {
			setLoadingState(false)
			setRandomScone(scone)
		}, 3000)
	}

	return (
		<Layout title="Scone Hungus">
			<div style={{borderBottom: "1px solid #444"}}>
				<p
					style={{
						margin: "48px auto 16px",
						textAlign: "center",
						fontSize: "40px",
						fontWeight: "bolder",
						lineHeight: "50px",
						maxWidth: "650px"
					}}>
					<i>"A good scone is crispy outside, and soft inside."</i>
				</p>

				<p
					style={{
						textAlign: "center",
						marginBottom: "48px"
					}}>
					— SconeHungus
				</p>
			</div>

			<div style={{textAlign: "center", padding: "60px 24px"}}>
				<h2>Today's scone</h2>
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
				<Button
					primary
					label="Show me another one"
					onClick={displayRandomScone}
				/>
			</div>
			<style jsx>{`
				.randomSconeContainer {
					width: 500px;
					max-width: 500px;
					height: 500px;
					margin: 32px auto;
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
