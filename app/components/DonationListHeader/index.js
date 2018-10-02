import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
} from 'components/InvertedBorder';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class DonationListHeader extends React.Component {
  render() {
    const {
      classes,
      closure_date: closureDate,
      donated_to: donatedTo,
      program,
    } = this.props;
    return (
      <div>
        <Card className={classes.cardTitle} elevation={0} square>
          <CardContent>
            <Typography
              component="p"
              variant="subheading"
              className={classes.closingDate}
            >
              <b>List closes: {closureDate}</b>
            </Typography>
          </CardContent>
          <BottomLeft />
          <BottomRight />
        </Card>
        <Card
          className={[classes.cardDonation, classes.borderTop].join(' ')}
          elevation={0}
          square
        >
          <TopLeft />
          <TopRight />
          <CardContent>
            <Typography variant="subheading" className={classes.subheading}>
              <b>{program}</b>
            </Typography>
            <Typography component="p" variant="caption">
              {donatedTo}
            </Typography>
            <Button
              variant="contained"
              className={classes.buttonPrimary}
              size="small"
            >
              <Typography className={classes.donateButton}>
                <b>Donate</b>
              </Typography>
            </Button>
          </CardContent>
          <BottomLeft />
          <BottomRight />
        </Card>
      </div>
    );
  }
}

DonationListHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  closure_date: PropTypes.string,
  program: PropTypes.string,
  donated_to: PropTypes.string,
};

export default withStyles(styles)(DonationListHeader);
