import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    margin: 2,
    width: Dimensions.get('window').width / 2 - 8,
  },
  textContainer: {
    padding: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
