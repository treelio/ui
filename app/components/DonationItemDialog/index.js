import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CardHeader from '@material-ui/core/CardHeader';
import Close from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class DonationItemDialog extends React.Component {
  render() {
    const { classes, show, onCloseDialogAction, data } = this.props;
    const { brand, name, photo } = data;
    return (
      <Dialog
        className={classes.dialog}
        fullScreen
        open={show}
        aria-labelledby="responsive-dialog-title"
      >
        <CardHeader
          className={classes.dialogHeader}
          action={
            <IconButton
              className={classes.dialogClose}
              onClick={onCloseDialogAction}
            >
              <Close />
            </IconButton>
          }
        />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <div className={classes.dialogImageContainer}>
              <img className={classes.dialogImage} src={photo} alt={photo} />
            </div>
          </Grid>
          <Grid item className={classes.dialogTextContainer}>
            <Typography variant="h5" className={classes.dialogText}>
              <b>{name}</b>
            </Typography>
            <Typography variant="caption" gutterBottom align="center">
              {brand}
            </Typography>
          </Grid>
          <Grid item className={classes.dialogButton}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.dialogButtonCancel}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    );
  }
}

DonationItemDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  onCloseDialogAction: PropTypes.func.isRequired,
};

export default withStyles(styles)(DonationItemDialog);
