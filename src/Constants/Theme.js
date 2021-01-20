import { createMuiTheme } from '@material-ui/core/styles';
import '../App.css';

const theme = createMuiTheme({
    //Palette
    palette: {
        primary: {
            main: '#f7f7ea',
            light: '#ffffff',
            dark: '#c4c4b8',
            contrastText: '#000',
        },
        secondary: {
            main: '#eeb902',
            light: '#ffeb4d',
            dark: '#b78a00',
            contrastText: '#000',
        },
    },
    //Typography
    typography: {
        fontFamily: [
            'Roboto',
            'Montserrat',
            'Raleway',
        ].join(','),
    },

});

export default theme;