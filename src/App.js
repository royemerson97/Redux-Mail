import React, { Component } from 'react';
import AppBar from './components/AppBar';
import Menu from './components/Menu';
import List from './components/List';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fireMeUp, fireUnreadMail, fireMailsByType, fireMailsByTextEntry } from 'rdx/actions/App'
const styles = theme => ({
	contentWrapper: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	},
	menu: {
		width: '250px',
		height: '100%',
		float: 'left'
	},
	list: {
		float: 'left',
		width: 'calc(100% - 250px)'
	}
})


class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fireMeUp());
		dispatch(fireUnreadMail());
	}

	handleMenuChange = (type) =>{
		const { dispatch } = this.props;
		dispatch(fireMailsByType(type));
	}

	handleSearchBarChange = (value) =>{
		const { dispatch } = this.props;
		if (value.length > 3 ) {
			dispatch(fireMailsByTextEntry(value));
			return;
		}
		const { currentMailBox } = this.props.app
		dispatch(fireMailsByType(currentMailBox));
	}

	render() {
		const { classes } = this.props;
		const { unread, mails } = this.props.app;
		return (
			<div>
				<AppBar unread={unread} handleSearchBarChange={this.handleSearchBarChange} />
				<div className={classes.contentWrapper}>
					<Menu className={classes.menu} handleMenuChange={this.handleMenuChange}/>
					<List className={classes.list} mails={mails} />
				</div>
			</div>
		);
	}
}

export default connect((state) => state)(withStyles(styles)(App));
