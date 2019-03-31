import React from 'react';

class Analytics extends React.Component {
	componentDidMount() {
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			// eslint-disable-next-line prefer-rest-params
			window.dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'UA-137411414-1');
	}

	render() {
		return (
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=UA-137411414-1"
			/>
		);
	}
}

export default Analytics;
