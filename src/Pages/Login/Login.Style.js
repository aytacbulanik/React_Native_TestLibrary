import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  body_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.9,
    resizeMode: 'contain',
  },
  logo_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
