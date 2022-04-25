import { View, Image, Text, StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10
  },
  information: {
    flexShrink: 1
  },
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    padding: 5,
    borderRadius: 5
  },
  pillText: {
    color: '#fff'
  },
  text: {
    flexShrink: 1,
    flexWrap: 'wrap',
    fontSize: 16
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5
  }
})

const RepositoryInfo = ({ avatarUrl, name, description, language }) => (
  <View style={styles.container}>
    <Image 
      style={styles.avatar}
      source={{ uri: avatarUrl }}
    />
    <View style={styles.information}>
      <Text style={[styles.text, styles.name]}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
      <View style={styles.pill}>
        <Text style={styles.pillText}>{language}</Text>
      </View>
    </View>
  </View>
)

export default RepositoryInfo
