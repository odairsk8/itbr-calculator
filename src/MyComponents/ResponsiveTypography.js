import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveTypography(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Typography {...props} variant={props.variant}>{props.text}</Typography>
      </ThemeProvider>
    </React.Fragment>
  );
}
