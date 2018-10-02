const size = 12;
const loc = -Math.abs(size / 2);
const styles = {
  topLeft: {
    width: size,
    height: size,
    borderWidth: 0,
    borderRadius: '50%',
    backgroundColor: '#e8eaec',
    float: 'left',
    marginLeft: loc,
    marginTop: loc,
    overflow: 'hidden',
  },
  topRight: {
    width: size,
    height: size,
    borderWidth: 0,
    borderRadius: '50%',
    backgroundColor: '#e8eaec',
    float: 'right',
    marginRight: loc,
    marginTop: loc,
    overflow: 'hidden',
  },
  bottomLeft: {
    width: size,
    height: size,
    borderWidth: 0,
    borderRadius: '50%',
    backgroundColor: '#e8eaec',
    float: 'left',
    marginLeft: loc,
    marginBottom: loc,
    overflow: 'hidden',
  },
  bottomRight: {
    width: size,
    height: size,
    borderWidth: 0,
    borderRadius: '50%',
    backgroundColor: '#e8eaec',
    float: 'right',
    marginRight: loc,
    marginBottom: loc,
    overflow: 'hidden',
  },
};

export default styles;
