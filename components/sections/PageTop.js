import React from 'react';

const PageTop = ({ title }) => {
	return (
		<React.Fragment>
			<section className="section-pagetop bg-gray">
				<div className="container">
					<h2 className="title-page">{title}</h2>
				</div>
			</section>
		</React.Fragment>
	);
};

export default PageTop;
