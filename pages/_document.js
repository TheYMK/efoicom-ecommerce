import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config'; // So we can access configuration variables

const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* antd */}
					<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/manifest.json" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
					<meta name="theme-color" content="#ffffff" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.14.1/antd.min.css"
						integrity="sha512-GElOEG62hoWTO/9pNNVPBz+b9AELiVOuEEjM3h5jE5nVx+SVHRaKP/TjcJrwjkJC3CfnSK4clQ6l1jxmaeK9tg=="
						crossOrigin="anonymous"
					/>
					{/* icofont */}
					<link href="/static/fonts/icofont/icofont.min.css" rel="stylesheet" />

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

					{/* Mapbox */}
					<link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet" />
					{/* Geocoder */}
					<link
						href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.css"
						rel="stylesheet"
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
