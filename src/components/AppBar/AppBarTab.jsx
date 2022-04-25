import { View, StyleSheet } from 'react-native';
import Text from '../Text'

const styles = StyleSheet.create({
  tab: {
    margin: 20
  },
})

const AppBarTab = ({ text }) => (
  <View style={styles.tab}>
    <Text color='secondary' fontSize='heading'>
      {text}
    </Text>
  </View>
)

export default AppBarTab
