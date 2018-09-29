import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
} from 'components/InvertedBorder';

import makeSelectData from './selectors';
import { getData } from './actions';
import styles from './styles';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class DonationsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.retrieveList = this.retrieveList.bind(this);
  }

  componentDidMount() {
    this.retrieveList();
  }

  retrieveList() {
    this.props.dispatch(getData());
  }

  navigate(route) {
    this.props.dispatch(push(route));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Donations</title>
          <meta name="description" content="list of donations" />
        </Helmet>
        <div className={classes.main}>
          <Card className={classes.cardTitle} elevation={0} square>
            <CardContent>
              <Typography
                component="p"
                variant="subheading"
                className={classes.closingDate}
              >
                <b>List closes: 12/15/18</b>
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
              <Typography variant="subheading">
                <b>Holiday Family Adoption</b>
              </Typography>
              <Typography component="p" variant="caption">
                Spring Hill United Methodist Church
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
          <Card
            className={[classes.cardDonationList, classes.borderTop].join(' ')}
            elevation={0}
            square
          >
            <TopLeft />
            <TopRight />

            <CardContent>
              <div className={classes.flex}>
                <Typography className={classes.listItem} component="span">
                  <i>
                    <b>Boy</b>
                  </i>
                </Typography>
                <span>
                  <b className={classes.separator}>|</b>
                </span>
                <Typography className={classes.listItem} component="span">
                  <i>
                    <b>4 months old</b>
                  </i>
                </Typography>
                <span>
                  <b className={classes.separator}>|</b>
                </span>
                <Typography className={classes.listItem} component="span">
                  <i>
                    <b>Size: 3-6m</b>
                  </i>
                </Typography>
              </div>
              <List>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.listAvatar}>
                    <img
                      src="http://lorempixel.com/300/130/"
                      alt="http://lorempixel.com/300/130/"
                    />
                  </Avatar>
                  <ListItemText
                    primary="Swaddlers Size 2"
                    secondary="Pampers"
                  />
                  <Button
                    variant="contained"
                    size="small"
                    disabled
                    className={classes.listButtonDisabled}
                  >
                    <i>Claimed</i>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.listAvatar}>
                    <img
                      src="http://lorempixel.com/300/130/"
                      alt="http://lorempixel.com/300/130/"
                    />
                  </Avatar>
                  <ListItemText
                    primary="Swaddlers Size 2"
                    secondary="Pampers"
                  />
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.listButton}
                  >
                    <i>Cancel</i>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.listAvatar}>
                    <img
                      src="http://lorempixel.com/300/130/"
                      alt="http://lorempixel.com/300/130/"
                    />
                  </Avatar>
                  <ListItemText
                    primary="Swaddlers Size 2"
                    secondary="Pampers"
                  />
                </ListItem>
              </List>
            </CardContent>
            <BottomLeft />
            <BottomRight />
          </Card>
          <Card
            className={[classes.cardDonationListLast, classes.borderTop].join(
              ' ',
            )}
            elevation={0}
            square
          >
            <TopLeft />
            <TopRight />

            <CardContent>
              <div className={classes.flex}>
                <Typography className={classes.listItem} component="span">
                  <i>
                    <b>Boy</b>
                  </i>
                </Typography>
                <span>
                  <b className={classes.separator}>|</b>
                </span>
                <Typography className={classes.listItem} component="span">
                  <i>
                    <b>4 months old</b>
                  </i>
                </Typography>
                <span>
                  <b className={classes.separator}>|</b>
                </span>
                <Typography className={classes.listItem} component="span">
                  <i>
                    <b>Size: 3-6m</b>
                  </i>
                </Typography>
              </div>
              <List>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.listAvatar}>
                    <img
                      src="http://lorempixel.com/300/130/"
                      alt="http://lorempixel.com/300/130/"
                    />
                  </Avatar>
                  <ListItemText
                    primary="Swaddlers Size 2"
                    secondary="Pampers"
                  />
                  <Button
                    variant="contained"
                    size="small"
                    disabled
                    className={classes.listButtonDisabled}
                  >
                    <i>Claimed</i>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.listAvatar}>
                    <img
                      src="http://lorempixel.com/300/130/"
                      alt="http://lorempixel.com/300/130/"
                    />
                  </Avatar>
                  <ListItemText
                    primary="Swaddlers Size 2"
                    secondary="Pampers"
                  />
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.listButton}
                  >
                    <i>Cancel</i>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.listAvatar}>
                    <img
                      src="http://lorempixel.com/300/130/"
                      alt="http://lorempixel.com/300/130/"
                    />
                  </Avatar>
                  <ListItemText
                    primary="Swaddlers Size 2"
                    secondary="Pampers"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

DonationsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return { dispatch };
}
const mapStateToProps = createStructuredSelector({
  DonationsPage: makeSelectData(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'donations', reducer });
const withSaga = injectSaga({ key: 'donations', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(DonationsPage);
