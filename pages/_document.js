import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config'; // So we can access configuration variables

const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* antd */}
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.14.1/antd.min.css"
						integrity="sha512-GElOEG62hoWTO/9pNNVPBz+b9AELiVOuEEjM3h5jE5nVx+SVHRaKP/TjcJrwjkJC3CfnSK4clQ6l1jxmaeK9tg=="
						crossOrigin="anonymous"
					/>
					{/* JQuery */}
					<script src="/static/js/jquery-2.0.0.min.js" type="text/javascript" />
					{/* Bootstrap */}
					<script src="/static/js/bootstrap.bundle.min.js" type="text/javascript" />
					<link href="/static/css/bootstrap.css" rel="stylesheet" type="text/css" />

					{/* Material UI */}
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					{/* Carousel */}

					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>

					{/* Google font */}
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
					{/* <!-- Font awesome 5 --> */}
					<link href="/static/fonts/fontawesome/css/all.min.css" type="text/css" rel="stylesheet" />

					{/* <!-- custom style --> */}
					<link href="/static/css/ui.css" rel="stylesheet" type="text/css" />
					<link href="/static/css/responsive.css" rel="stylesheet" type="text/css" />

					{/* <!-- custom javascript --> */}
					<script src="/static/js/script.js" type="text/javascript" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
