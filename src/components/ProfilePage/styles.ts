import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 0',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  nameFields: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  profileFields: {
    '& > *': {
      margin: theme.spacing(2),
    },
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    margin: theme.spacing(2),
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
