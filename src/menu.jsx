export const menuList = [{
	title: 'Home',
	path: '/home',
	icon: 'icon-home'
}, {
	title: 'Status',
	path: '/status',
	icon: 'icon-icon_status',
	children: [{
		title: 'Status',
		path: '/status/connection',
		icon: 'icon-connection'
	}, {
		title: 'Internet',
		path: '/status/internet',
		icon: 'icon-internet',
		children: [{
			title: 'Wan',
			path: '/status/internet/wan',
			icon: 'icon-wan'
		}, {
			title: 'Lan',
			path: '/status/internet/lan',
			icon: 'icon-lan'
		}]
	}]
}];

export const defaultPage = menuList[0];