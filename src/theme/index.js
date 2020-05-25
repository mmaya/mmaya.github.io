import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#BDC4E4' },
  secondary: { main: '#12022A' }
};
const themeName = 'Milleni';

let theme =  createMuiTheme({ palette, themeName });

theme = responsiveFontSizes(theme);

export default theme;