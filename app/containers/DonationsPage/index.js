import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
import DonationListHeader from 'components/DonationListHeader';

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

  renderItems(items) {
    const { classes } = this.props;
    return items.map(item => (
      <ListItem key={item.id} className={classes.listItem}>
        <Avatar className={classes.listAvatar}>
          <img src={item.photo} alt={item.photo} />
        </Avatar>
        <ListItemText primary={item.name} secondary={item.brand} />
      </ListItem>
    ));
  }
  render() {
    const { classes } = this.props;
    const { data } = this.props.DonationsPage;
    const list = data.list ? data.list : [];
    const listCtr = list.length;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Donations</title>
          <meta name="description" content="list of donations" />
        </Helmet>
        <div className={classes.main}>
          <DonationListHeader {...data} />

          {list.map((card, index) => (
            <Card
              key={card.id}
              className={[classes.cardDonationList, classes.borderTop].join(
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
                      <b>{card.for}</b>
                    </i>
                  </Typography>
                  <span>
                    <b className={classes.separator}>|</b>
                  </span>
                  <Typography className={classes.listItem} component="span">
                    <i>
                      <b>{card.age}</b>
                    </i>
                  </Typography>
                  <span>
                    <b className={classes.separator}>|</b>
                  </span>
                  <Typography className={classes.listItem} component="span">
                    <i>
                      <b>{card.size}</b>
                    </i>
                  </Typography>
                </div>
                <List>{card.items ? this.renderItems(card.items) : null}</List>
              </CardContent>
              {listCtr === index + 1 ? null : (
                <div>
                  <BottomLeft />
                  <BottomRight />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

DonationsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  DonationsPage: PropTypes.object.isRequired,
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
