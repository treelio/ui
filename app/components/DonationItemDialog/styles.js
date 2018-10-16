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
  dialogImageContainer: {
    display: 'flex',
    borderRadius: 5,
    width: 200,
    height: 200,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e8eaec',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogTextContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  dialogText: {
    fontSize: 24,
    margin: 10,
  },
  dialogButtonCancel: {
    margin: 0,
    backgroundColor: '#bf2828',
    width: 200,
    height: 45,
  },
});

export default styles;
