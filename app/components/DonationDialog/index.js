import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class DonationDialog extends React.Component {
  render() {
    const {
      classes,
      onClickButtonItem,
      onCloseDialogAction,
      onUpdateDonationText,
      onClickDonateButton,
      programId,
      show,
      value,
    } = this.props;
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
          <Grid item className={classes.dialogTextContainer}>
            <Typography variant="h5" className={classes.dialogText}>
              <b>Donate</b>
            </Typography>
          </Grid>
          <Grid item className={classes.dialogFormContainer}>
            <TextField
              value={value}
              onChange={e => onUpdateDonationText(e.target.value)}
              id="outlined-bare"
              margin="normal"
              variant="outlined"
              className={classes.dialogTextField}
              inputProps={{
                style: {
                  textAlign: 'center',
                  fontSize: 20,
                  flexWrap: 'wrap',
                  display: 'flex',
                },
              }}
            />
          </Grid>
          <Grid item className={classes.dialogButtonContainer}>
            <Button
              variant="outlined"
              className={classes.currencyButton}
              onClick={() => onClickButtonItem('$5')}
            >
              <Typography className={classes.currencyButtonText}>
                <b>$5</b>
              </Typography>
            </Button>
            <Button
              variant="outlined"
              className={classes.currencyButton}
              onClick={() => onClickButtonItem('$10')}
            >
              <Typography className={classes.currencyButtonText}>
                <b>$10</b>
              </Typography>
            </Button>
          </Grid>
          <Grid item className={classes.dialogButtonContainer}>
            <Button
              variant="outlined"
              className={classes.currencyButton}
              onClick={() => onClickButtonItem('$25')}
            >
              <Typography className={classes.currencyButtonText}>
                <b>$25</b>
              </Typography>
            </Button>
            <Button
              variant="outlined"
              className={classes.currencyButton}
              onClick={() => onClickButtonItem('$50')}
            >
              <Typography className={classes.currencyButtonText}>
                <b>$50</b>
              </Typography>
            </Button>
          </Grid>

          <Grid item className={classes.dialogButton}>
            <Button
              variant="contained"
              className={classes.dialogButtonDonate}
              onClick={() => onClickDonateButton(programId, value)}
            >
              <Typography className={classes.donateButtonText}>
                <b>Donate</b>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    );
  }
}

DonationDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  onClickButtonItem: PropTypes.func.isRequired,
  onCloseDialogAction: PropTypes.func.isRequired,
  onUpdateDonationText: PropTypes.func.isRequired,
  onClickDonateButton: PropTypes.func.isRequired,
  programId: PropTypes.string.isRequired,
  value: PropTypes.any,
};

export default withStyles(styles)(DonationDialog);
