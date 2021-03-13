import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config'; // So we can access configuration variables

const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
					<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
					<link href="fonts/fontawesome/css/all.min.css" type="text/css" rel="stylesheet" />
					<link href="css/ui.css" rel="stylesheet" type="text/css" />
					<link href="css/responsive.css" rel="stylesheet" type="text/css" />
				</Head>
				<body>
					<Main />
					<NextScript />

					<script src="js/jquery-2.0.0.min.js" type="text/javascript" />
					<script src="js/bootstrap.bundle.min.js" type="text/javascript" />
					<script src="js/script.js" type="text/javascript" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
