import * as React from "react"
import {Scone} from "../interfaces"
import {Anchor} from "grommet"
import {Star} from "grommet-icons"
import useMediaQuery from "@material-ui/core/useMediaQuery"

type Props = {
	scones: Scone[]
}

const List: React.FunctionComponent<Props> = ({scones}) => {
	const isNotMobile = useMediaQuery("(min-width:600px)")

	return (
		<ul style={{paddingLeft: 0, marginTop: 0}}>
			{scones
				.sort((a, b) => b.rating - a.rating)
				.map(
					({placeName, placeAddress, flavour, rating, image, note}, index) => (
						<li
							key={placeName}
							className={isNotMobile ? "listStyleDesktop" : "listStyleMobile"}>
							{image ? (
								<div
									className={isNotMobile ? "imageBoxDesktop" : "imageBoxMobile"}
								/>
							) : (
								<div
									className={isNotMobile ? "noImageDesktop" : "noImageMobile"}>
									<p>No image</p>
								</div>
							)}
							<div className={isNotMobile ? "textDesktop" : undefined}>
								<h3
									className={isNotMobile ? "headingDesktop" : "headingMobile"}>
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
								.listStyleMobile {
									border-bottom: ${index !== scones.length - 1
										? "1px solid #444"
										: "none"};
									padding-bottom: 24px;
									margin-bottom: 24px;
									list-style: none;
								}

								.listStyleDesktop {
									border-bottom: ${index !== scones.length - 1
										? "1px solid #444"
										: "none"};
									padding-bottom: 24px;
									margin-bottom: 24px;
									list-style: none;
									display: flex;
								}

								.imageBoxMobile {
									width: 100%;
									height: 300px;
									background-color: yellow;
									background-image: url(/${image});
									background-repeat: no-repeat;
									background-size: cover;
									background-position: center;
								}

								.imageBoxDesktop {
									width: 300px;
									height: 300px;
									background-color: yellow;
									background-image: url(/${image});
									background-repeat: no-repeat;
									background-size: cover;
									background-position: center;
									margin-right: 24px;
								}

								.noImageMobile {
									width: 100%;
									height: 100px;
									background-color: yellow;
									text-align: center;
									display: flex;
									justify-content: center;
									align-items: center;
								}

								.noImageDesktop {
									width: 300px;
									height: 300px;
									background-color: yellow;
									text-align: center;
									display: flex;
									justify-content: center;
									align-items: center;
									margin-right: 24px;
								}

								.textDesktop {
									display: flex;
									justify-content: center;
									flex-direction: column;
									width: calc(100% - 300px);
								}

								.headingMobile {
									display: flex;
									align-items: center;
									margin-top: 16px;
									margin-bottom: 8px;
								}

								.headingDesktop {
									display: flex;
									align-items: center;
									margin-top: 0;
									margin-bottom: 8px;
								}
							`}</style>
						</li>
					)
				)}
		</ul>
	)
}

export default List
