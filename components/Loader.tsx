import * as React from "react"
import Loader from "react-loader-spinner"
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const LoaderSpinner: React.FunctionComponent = () => (
	<Loader
		type="ThreeDots"
		color="#eeff41"
		height={200}
		width={200}
		timeout={3000}
	/>
)

export default LoaderSpinner
