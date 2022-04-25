import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  stat: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  bold: {
    fontWeight: 'bold'
  }
})

const Stat = ({ number, text }) => {
  const formatNumber = (number) => (
    number > 999 
      ? (number / 1000).toFixed(1) + 'k'
      : number
  )

  number = formatNumber(parseInt(number))

  return (
    <View style={styles.stat}>
      <Text style={styles.bold}>{number}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const RepositoryStats = ({ stats }) => (
  <View style={styles.container}>
    <Stat text='Stars' number={stats.stars} />
    <Stat text='Forks' number={stats.forks} />
    <Stat text='Reviews' number={stats.reviews} />
    <Stat text='Rating' number={stats.rating} />
  </View>
)

export default RepositoryStats
