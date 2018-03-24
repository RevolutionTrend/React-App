import React, { Component } from 'react';

export default class PageTop extends Component {
	render() {
		return (
			<div className="header-main">
				<div className="header-icon">
					<i className="iconfont icon-menu"></i>
				</div>
				<div className="header-icon header-title">
					<span>My React App</span>
				</div>
				<div className="header-icon header-toolbar">
					<i className="iconfont icon-search"></i>
				</div>
			</div>
		)
	}
}