import { Platform } from "react-native-web"

const theme = {
  colors: {
    primary: '#004e89',
    textPrimary: '#202020',
    textSecondary: '#fff',
    error: '#dd2211'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  }
}

export default theme
