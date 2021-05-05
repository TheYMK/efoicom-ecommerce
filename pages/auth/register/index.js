import React from 'react';
import Head from 'next/head';
import Register from '../../../components/auth/Register';
import Header from '../../../components/header/Header';
import Layout from '../../../components/Layout';
import VideoPlayer from '../../../components/videoplayer/VideoPlayer';

const RegisterPage = () => {
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
		</Head>
	);
	return (
		<React.Fragment>
			{head()}
			<Layout>
				<header className="section-header">
					<Header />
				</header>
				<section className="section-content padding-y" style={{ overflow: 'hidden' }}>
					<div className="row">
						<div className="col-md-6">
							<div className="container mt-5">
								<h5>
									<i className="fas fa-question-circle" /> Comment s'enregistrer?
								</h5>
								<VideoPlayer
									className="react-player"
									url={
										'https://www.youtube.com/watch?v=BNeIHX8oueU&ab_channel=GreenScreenchromakeynocopyright'
									}
									controls={true}
									w={'100%'}
									h={'400px'}
									light={true}
									pip={true}
									muted={false}
								/>
							</div>
						</div>
						<div className="col-md-6">
							<Register />
						</div>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default RegisterPage;
