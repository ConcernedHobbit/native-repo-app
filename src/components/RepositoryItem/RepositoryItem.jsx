import { View } from "react-native";
import { StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryInfo from "./RepositoryInfo"

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 10,
    maxWidth: 600
  }
})

const RepositoryItem = ({ item }) => (
  <View style={styles.item}>
    <RepositoryInfo 
      avatarUrl={item.ownerAvatarUrl}
      name={item.fullName}
      description={item.description}
      language={item.language}
    />
    <RepositoryStats 
      stats={{
        stars: item.stargazersCount,
        forks: item.forksCount,
        reviews: item.reviewCount,
        rating: item.ratingAverage
      }}
    />
  </View>
)

export default RepositoryItem
