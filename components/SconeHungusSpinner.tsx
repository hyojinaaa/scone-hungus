import * as React from "react"

interface Props {
	spinDirection: "clockwise" | "nonClockwise"
}

const SconeHungusSpinner: React.FunctionComponent<Props> = ({
	spinDirection
}) => {
	return (
		<>
			<div
				className={
					spinDirection === "clockwise"
						? "sconeHungusLogoClockwise"
						: "sconeHungusLogoNonClockwise"
				}
			/>

			<style global jsx>{`
				@keyframes spin-clockwise {
					from {
						transform: rotate(180deg);
					}
					to {
						transform: rotate(-180deg);
					}
				}

				@keyframes spin-non-clockwise {
					from {
						transform: rotate(-180deg);
					}
					to {
						transform: rotate(180deg);
					}
				}

				.sconeHungusLogoClockwise {
					background-size: cover;
					width: 150px;
					height: 150px;
					background-image: url(/sconehungus.svg);
					animation: spin-clockwise 3s linear infinite;
				}

				.sconeHungusLogoNonClockwise {
					background-size: cover;
					width: 150px;
					height: 150px;
					background-image: url(/sconehungus.svg);
					animation: spin-non-clockwise 3s linear infinite;
				}
			`}</style>
		</>
	)
}

export default SconeHungusSpinner
