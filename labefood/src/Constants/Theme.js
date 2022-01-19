import { createTheme } from '@mui/material/styles';
import {primaryColor, neutralColor} from "./Colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    text: {
        primary: neutralColor
    }
  }
})

export default theme 