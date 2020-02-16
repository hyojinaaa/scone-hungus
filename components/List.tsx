import * as React from "react"
import {Scone} from "../interfaces"
import {Anchor} from "grommet"
import {Star} from "grommet-icons"
import {useMediaQuery} from "react-responsive"

type Props = {
	scones: Scone[]
}

const List: React.FunctionComponent<Props> = ({scones}) => {
	const isMobile = useMediaQuery({query: "(max-width: 767px)"})
	const isMobileDevice = useMediaQuery({
		query: "(max-device-width: 767px)"
	})

	return (
		<ul style={{paddingLeft: 0, marginTop: 0}}>
			{scones
				.sort((a, b) => b.rating - a.rating)
				.map(
					({placeName, placeAddress, flavour, rating, image, note}, index) => (
						<li
							key={placeName}
							style={
								isMobile || isMobileDevice
									? {
											borderBottom:
												index !== scones.length - 1 ? "1px solid #444" : "none",
											paddingBottom: "24px",
											marginBottom: "24px",
											listStyle: "none"
									  }
									: {
											borderBottom:
												index !== scones.length - 1 ? "1px solid #444" : "none",
											paddingBottom: "24px",
											marginBottom: "24px",
											listStyle: "none",
											display: "flex"
									  }
							}>
							{image ? (
								<div
									style={
										isMobile || isMobileDevice
											? {
													width: "100%",
													height: "300px",
													backgroundColor: "yellow",
													backgroundImage: `url(/${image})`,
													backgroundRepeat: "no-repeat",
													backgroundSize: "cover",
													backgroundPosition: "center"
											  }
											: {
													width: "300px",
													height: "300px",
													backgroundColor: "yellow",
													backgroundImage: `url(/${image})`,
													backgroundRepeat: "no-repeat",
													backgroundSize: "cover",
													backgroundPosition: "center",
													marginRight: "24px"
											  }
									}
								/>
							) : (
								<div
									style={
										isMobile || isMobileDevice
											? {
													width: "100%",
													height: "100px",
													backgroundColor: "yellow",
													textAlign: "center",
													display: "flex",
													justifyContent: "center",
													alignItems: "center"
											  }
											: {
													width: "300px",
													height: "300px",
													backgroundColor: "yellow",
													textAlign: "center",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													marginRight: "24px"
											  }
									}>
									<p>No image</p>
								</div>
							)}
							<div
								style={
									isMobileDevice || isMobile
										? {}
										: {
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												width: "calc(100% - 300px)"
										  }
								}>
								<h3
									style={
										isMobileDevice || isMobile
											? {
													display: "flex",
													alignItems: "center",
													marginTop: "16px",
													marginBottom: "8px"
											  }
											: {
													display: "flex",
													alignItems: "center",
													marginTop: "0",
													marginBottom: "8px"
											  }
									}>
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
						</li>
					)
				)}
		</ul>
	)
}

export default List
