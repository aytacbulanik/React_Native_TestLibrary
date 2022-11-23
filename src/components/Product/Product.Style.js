import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 10,
    borderWidth: 1,
    width: Dimensions.get('window').width / 2 - 8,
  },
  textContainer: {
    padding: 3,
  },
  image: {
    width: Dimensions.get('window').width / 2 - 12,
    height: Dimensions.get('window').height / 4 - 2,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'aqua',
  },
});
