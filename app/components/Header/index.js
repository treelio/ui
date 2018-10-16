import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BackIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.main}>
        <Toolbar className={classes.grow}>
          <IconButton className={classes.leftToolbar}>
            <MenuIcon className={classes.menuIcon} />
            <BackIcon className={classes.backIcon} />
          </IconButton>
        </Toolbar>
        <Toolbar className={classes.center}>
          <Typography variant="title" className={classes.title}>
            Treelio
          </Typography>
        </Toolbar>
        <Toolbar>
          <IconButton className={classes.rightToolbar}>
            <ExitToAppIcon className={classes.logoutIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
