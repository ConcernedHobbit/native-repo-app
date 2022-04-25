import { StyleSheet, View, Text } from 'react-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  )
}

export default Main
