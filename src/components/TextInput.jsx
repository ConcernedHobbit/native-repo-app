import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  default: {
    backgroundColor: '#fff',
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 20
  }
})

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [style, styles.default]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
