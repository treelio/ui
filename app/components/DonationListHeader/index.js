import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { BottomLeft, BottomRight } from 'components/InvertedBorder';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class DonationListHeader extends React.Component {
  render() {
    const { classes, closureDate } = this.props;

    return (
      <div>
        <Card className={classes.cardTitle} elevation={0} square>
          <CardContent>
            <Typography component="p" variant="subtitle1">
              <b>List closes: {closureDate}</b>
            </Typography>
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
  closureDate: PropTypes.string,
};

export default withStyles(styles)(DonationListHeader);
