import { ScrollView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: 20
  }
});

const AppBar = () => (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Link to="/">
        <AppBarTab text='Repositories' />
      </Link>

      <Link to="/sign-in">
        <AppBarTab text='Sign in'/>
      </Link>
    </ScrollView>
  </View>
);

export default AppBar;
