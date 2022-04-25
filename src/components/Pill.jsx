import { View, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 5
  }
})

const Pill = ({ text }) => (
  <View style={styles.pill}>
    <Text color='secondary'>{text}</Text>
  </View>
)

export default Pill
