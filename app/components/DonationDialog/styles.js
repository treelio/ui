const styles = () => ({
  dialog: {
    height: 450,
    maxWidth: 400,
    marginLeft: 18,
    marginRight: 18,
    boxShadow: 0,
  },
  dialogHeader: {
    paddingTop: 10,
    paddingBottom: 0,
  },
  dialogClose: {
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'transparent !important',
  },
  dialogImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  },
  dialogFormContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
  dialogText: {
    fontSize: 24,
    margin: 10,
  },
  dialogTextField: {
    width: 300,
    textAlign: 'center',
  },
  dialogButtonDonate: {
    marginTop: 50,
    backgroundColor: '#50ac7a',
    width: 200,
    height: 45,
    boxShadow: 'none',
    textTransform: 'Capitalize',
  },
  dialogButtonContainer: {
    marginBottom: 15,
    display: 'flex',
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currencyButton: {
    minWidth: 145,
    borderColor: '#50ac7a',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  currencyButtonText: {
    color: '#50ac7a',
  },
  donateButtonText: {
    color: '#ffffff',
  },
});

export default styles;
