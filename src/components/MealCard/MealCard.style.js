import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
  },
  image: {height: 200, flex: 1, justifyContent: 'flex-end'},
  text: {
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'right',
  },
});
