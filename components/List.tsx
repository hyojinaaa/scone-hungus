import * as React from "react"
import {Scone} from "../interfaces"
import {Anchor} from "grommet"
import {Star} from "grommet-icons"
import {useMediaQuery} from "react-responsive"

type Props = {
	scones: Scone[]
}

const List: React.FunctionComponent<Props> = ({scones}) => {
	const isMobile = useMediaQuery({maxWidth: 767})

	return (
		<ul style={{paddingLeft: 0, marginTop: 0}}>
			{scones
				.sort((a, b) => b.rating - a.rating)
				.map(
					({placeName, placeAddress, flavour, rating, image, note}, index) => (
						<React.Fragment key={placeName}>
							{isMobile ? (
								<li
									key={placeName}
									style={{
										borderBottom:
											index !== scones.length - 1 ? "1px solid #444" : "non"
									}}>
									{image ? (
										<div className="image" />
									) : (
										<div
											style={{
												width: "100%",
												height: "100px",
												backgroundColor: "yellow",
												textAlign: "center",
												display: "flex",
												justifyContent: "center",
												alignItems: "center"
											}}>
											<p>No image</p>
										</div>
									)}
									<div className="text">
										<h3
											style={{
												display: "flex",
												alignItems: "center",
												marginTop: "16px",
												marginBottom: "8px"
											}}>
											{placeName}
											{index === 0 && (
												<Star
													style={{
														marginLeft: "4px"
													}}
												/>
											)}
										</h3>
										<Anchor
											href={placeAddress}
											label="Find Location"
											style={{
												textDecoration: "underline",
												color: "#444",
												marginBottom: "8px",
												display: "block"
											}}
										/>
										{flavour && (
											<p style={{marginBottom: "8px", marginTop: "0"}}>
												<strong>Flavour: </strong>
												{flavour}
											</p>
										)}
										<p style={{marginBottom: "8px", marginTop: "0"}}>
											<strong>Rating: </strong>
											{rating} / 5
										</p>
										{note && note}
									</div>
									<style jsx>{`
										li {
											padding-bottom: 24px;
											margin-bottom: 24px;
											list-style: none;
										}

										.image {
											width: 100%;
											height: 300px;
											background-color: yellow;
											background-image: url(/${image});
											background-repeat: no-repeat;
											background-size: cover;
											background-position: center;
										}

										img {
											width: 100%;
											height: auto;
										}
									`}</style>
								</li>
							) : (
								<li
									key={placeName}
									style={{
										borderBottom:
											index !== scones.length - 1 ? "1px solid #444" : "non"
									}}>
									{image ? (
										<div className="image" />
									) : (
										<div
											style={{
												width: "30%",
												height: "auto",
												backgroundColor: "yellow",
												textAlign: "center",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												marginRight: "24px"
											}}>
											<p>No image</p>
										</div>
									)}
									<div className="text">
										<h3
											style={{
												display: "flex",
												alignItems: "center",
												marginTop: "0"
											}}>
											{placeName}
											{index === 0 && (
												<Star
													style={{
														marginLeft: "4px"
													}}
												/>
											)}
										</h3>
										<Anchor
											href={placeAddress}
											label="Find Location"
											style={{textDecoration: "underline", color: "#444"}}
										/>
										{flavour && (
											<p>
												<strong>Flavour: </strong>
												{flavour}
											</p>
										)}
										<p>
											<strong>Rating: </strong>
											{rating} / 5
										</p>
										{note && note}
									</div>
									<style jsx>{`
										li {
											display: flex;
											padding-bottom: 24px;
											margin-bottom: 24px;
										}

										.image {
											width: 30%;
											background-color: yellow;
											background-image: url(/${image});
											background-repeat: no-repeat;
											background-size: cover;
											background-position: center;
											margin-right: 24px;
										}

										.text {
											width: 70%;
										}

										img {
											width: 100%;
											height: auto;
										}
									`}</style>
								</li>
							)}
						</React.Fragment>
					)
				)}
		</ul>
	)
}

export default List
