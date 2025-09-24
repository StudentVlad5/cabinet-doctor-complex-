import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
  dateTimePicker: {
    '& label': {
      color: '#000000',
      fontSize: '24px',
    },
    '& div': {
      backgroundColor: '#FFFFFF',
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      borderRadius: '17px',
      '& input': {
        paddingTop: '20px',
        paddingRight: '53px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        borderRadius: '17px',
      },
      '& div': {
        '& button': {
          '& svg': {
            width: '35px',
            height: '35px',
          },
        },
      },
      '& fieldset': {
        border: '1px solid #000000',
        '& legend': {
          fontSize: '0.64em',
        },
      },
    },
  },
});
