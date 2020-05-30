import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import 'typeface-ubuntu';
import 'typeface-advent-pro';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Advent Pro, Arial',
    body2: {
      fontFamily: "Ubuntu, Arial",
    }
  },
  palette: {
      primary: { main: '#BDC4E4' },
      secondary: { main: '#12022A' },
    }
});


theme = responsiveFontSizes(theme);

export default theme;