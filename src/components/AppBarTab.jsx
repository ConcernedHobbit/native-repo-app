import { Text, Pressable, StyleSheet } from 'react-native';
import theme from '../theme'

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
  <Pressable style={styles.tab}>
      <Text style={styles.text}>
        {text}
      </Text>
    </Pressable>
)

export default AppBarTab
