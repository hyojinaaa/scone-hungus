import * as React from "react"
import {Scone} from "../interfaces"
import {Anchor} from "grommet"

type Props = {
	scones: Scone[]
}

const List: React.FunctionComponent<Props> = ({scones}) => (
	<ul style={{paddingLeft: 0}}>
		{scones.map(({placeName, placeAddress, flavour, rating, image, note}) => (
			<li key={placeName}>
				<div className="image" />
				<div className="text">
					<h3>{placeName}</h3>
					<Anchor href={placeAddress} label="Location" />
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
						margin: 16px 0;
						padding-bottom: 16px;
						border-bottom: 1px solid black;
						height: 180px;
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
		))}
	</ul>
)

export default List
