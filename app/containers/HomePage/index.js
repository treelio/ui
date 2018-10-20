import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import makeSelectData from './selectors';
import { getData } from './actions';
import styles from './styles';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
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
    const { data } = this.props.HomePage;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="home page" />
        </Helmet>
        <div className={classes.main}>
          {data.map(card => (
            <Card
              key={card.id}
              raised
              className={classes.card}
              onClick={() => this.navigate(`/donations/${card.docId}`)}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  src={card.photo}
                  image={card.photo}
                  height="160"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {card.donatedTo}
                  </Typography>
                  <Typography component="p">{card.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  HomePage: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return { dispatch };
}
const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectData(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(HomePage);
