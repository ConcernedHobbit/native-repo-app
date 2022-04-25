import { View, Image, StyleSheet } from 'react-native'
import Text from '../Text'
import Pill from '../Pill'

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
    flexShrink: 1,
    marginVertical: 5
  },
  text: {
    flexShrink: 1,
    flexWrap: 'wrap',
  }
})

const RepositoryInfo = ({ avatarUrl, name, description, language }) => (
  <View style={styles.container}>
    <Image 
      style={styles.avatar}
      source={{ uri: avatarUrl }}
    />
    <View style={styles.information}>
      <Text style={[styles.text, styles.name]} fontSize='subheading' fontWeight='bold'>{name}</Text>
      <Text style={styles.text} fontSize='subheading'>{description}</Text>
      <Pill text={language} />
    </View>
  </View>
)

export default RepositoryInfo
