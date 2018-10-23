const styles = () => ({
  root: {
    flexGrow: 1,
  },
  main: {
    flexGrow: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  cardTitle: {
    flexGrow: 1,
    position: 'relative',
  },
  cardDonation: {
    position: 'relative',
  },
  buttonPrimary: {
    marginTop: 15,
    backgroundColor: '#50ac7a',
    width: 150,
    boxShadow: 'none',
    textTransform: 'Capitalize',
  },
  donateButton: {
    color: '#ffffff',
    fontSize: 12,
  },
  cardDonationList: {
    flexGrow: 1,
  },
  cardDonationListLast: {
    flexGrow: 1,
  },
  borderTop: {
    borderStyle: 'dashed',
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRight: 0,
    borderTop: 2,
    borderColor: '#e8eaec',
  },
  separator: {
    marginLeft: 12,
    marginRight: 12,
    fontSize: 15,
    color: '#d3dce1',
  },
  flex: {
    display: 'flex',
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  listAvatar: {
    display: 'flex',
    borderRadius: 0,
    width: 65,
    height: 65,
  },
  avatar: {
    width: 65,
    height: 65,
  },
  listButton: {
    textTransform: 'capitalize',
    backgroundColor: '#bf2828',
    color: '#ffffff',
    boxShadow: 'none',
  },
  listButtonDisabled: {
    textTransform: 'capitalize',
    color: '#ffffff',
  },
  subheading: {
    fontSize: 20,
  },
});

export default styles;
