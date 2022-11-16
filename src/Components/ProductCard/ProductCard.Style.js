import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 3,
    padding: 5,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    flexDirection: 'row',
  },
  text_container: {
    flex: 1,
    marginLeft: 3,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    minHeight: 100,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
});
