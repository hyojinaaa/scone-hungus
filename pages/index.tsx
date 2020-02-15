import * as React from "react"
import {Button, Anchor, Heading} from "grommet"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import {NextPage} from "next"
import {cheeseScones, nonCheeseScones} from "../data/scones"
import {Scone} from "../interfaces"
import {logEvent} from "../utils/analytics"

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
		}, 500)
		logEvent("click", "show me another scone")
	}

	return (
		<Layout title="Scone Hungus">
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
							{randomScone.image ? (
								<img src={`/${randomScone.image}`} />
							) : (
								<div
									style={{
										width: "300px",
										height: "300px",
										backgroundColor: "yellow",
										textAlign: "center",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										margin: "0 auto"
									}}>
									<p>No image</p>
								</div>
							)}
							<h3>{randomScone.placeName}</h3>
							<Anchor
								href={randomScone.placeAddress}
								label="Find location"
								style={{textDecoration: "underline", color: "#444"}}
							/>
							{randomScone.flavour ? (
								<p>
									<strong>Flavour: </strong>
									{randomScone.flavour}
								</p>
							) : (
								<p>
									<strong>Flavour: </strong>
									Cheese
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
					max-width: 500px;
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
