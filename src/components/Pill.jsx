import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 5
  },
  pillText: {
    color: '#fff'
  },
})

const Pill = ({ text }) => (
  <View style={styles.pill}>
    <Text style={styles.pillText}>{text}</Text>
  </View>
)

export default Pill
