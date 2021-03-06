import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

function ListItemComposition(props) {
  const { classes, className, handleMenuChange } = props;
  return (
    <Paper className={className}>
      <MenuList>
        <MenuItem selected className={classes.menuItem} onClick={()=>handleMenuChange('inbox')}>
          <ListItemIcon className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Inbox" />
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={()=>handleMenuChange('draft')}>
          <ListItemIcon className={classes.icon}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={()=>handleMenuChange('trash')}>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Trash" />
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);