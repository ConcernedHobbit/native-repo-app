import { Text, View, StyleSheet } from 'react-native';
import theme from '../../theme'

const styles = StyleSheet.create({
  tab: {
    margin: 20
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: 20
  }
})

const AppBarTab = ({ text }) => (
  <View style={styles.tab}>
    <Text style={styles.text}>
      {text}
    </Text>
  </View>
)

export default AppBarTab
