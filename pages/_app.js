import Layout from "../components/common/Layout";
import { Provider } from "react-redux";
import animeStore from "../components/redux/animeStore";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={animeStore}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
