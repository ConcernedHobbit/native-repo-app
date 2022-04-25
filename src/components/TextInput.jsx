import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  default: {
    backgroundColor: '#fff',
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20
  },
  error: {
    borderColor: theme.colors.error
  }
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style, 
    styles.default,
    error && styles.error
  ]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
