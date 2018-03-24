import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { menuList } from '../menu';

export default class SideBar extends Component {

	state = {
		status: false
	}

	handleSubMenu = () => {
		this.setState({
			status: !this.state.status
		});
	}

	render() {
		let arrow = this.state.status ? 'iconfont icon-cc-arrow-down-circle' : 'iconfont icon-cc-arrow-left-circle';
		return (
			<ul className="side-ul">
				<li className="side-li">
					<i className="iconfont icon-home"></i>
					<Link to="/home">Home</Link>
				</li>
				<li style={{height: this.state.status ? 'auto' : '44px'}}>
					<div className="side-li" onClick={this.handleSubMenu}>
						<i className="iconfont icon-status"></i>
						<span>Status</span>
						<i className={arrow}></i>
					</div>
					<ul className="side-ul">
						<li className="side-li">
							<i className="iconfont icon-connection"></i>
							<Link to="/status/connection">Connection</Link>
						</li>
					</ul>
				</li>
			</ul>
		)
	}
}