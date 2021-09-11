import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: red[500],
    color: 'white',
    marginBottom: 20,
    fontWeight: '300',
    padding: '5px 0'
  }
}));

export default useStyles;