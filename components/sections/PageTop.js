import React from 'react';

const PageTop = ({ title }) => {
	return (
		<React.Fragment>
			<section class="section-pagetop bg-gray">
				<div class="container">
					<h2 class="title-page">{title}</h2>
				</div>
			</section>
		</React.Fragment>
	);
};

export default PageTop;
