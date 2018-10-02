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
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="home page" />
        </Helmet>
        <div className={classes.main}>
          <Card
            raised
            className={classes.card}
            onClick={() => this.navigate('/donations')}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                src="http://lorempixel.com/300/130/"
                image="http://lorempixel.com/200/140/"
                title="Contemplative Reptile"
                height="160"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Holy Saint Anthony Catholic Church
                </Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
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
