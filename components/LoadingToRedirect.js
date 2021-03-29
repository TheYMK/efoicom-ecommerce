import React, { useState, useEffect } from 'react';
import Router from 'next/router';

function LoadingToRedirect() {
	const [ count, setCount ] = useState(10);

	useEffect(
		() => {
			const interval = setInterval(() => {
				if (count !== 0) setCount((currentCount) => --currentCount);
			}, 1000);
			// redirect once count is equal to 0
			count === 0 && Router.push('/');
			// cleanup
			return () => clearInterval(interval);
		},
		[ count ]
	);

	return (
		<React.Fragment>
			{/* <div className="container p-5 text-center">
				<Spin tip={`Redirecting you in ${count} seconds`} />
			</div> */}
			<div id="preloader">
				<div className="jumper">
					<div />
					<div />
					<div />
				</div>
			</div>
			{/* <div className="overlay">
				<div className="overlayDoor" />
				<div className="overlayContent">
					<div className="loader">
						<div className="inner" />
					</div>
				</div>
			</div> */}
		</React.Fragment>
	);
}

export default LoadingToRedirect;
