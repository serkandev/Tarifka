import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  image: {
    height: 70,
    width: 100,
    borderRadius: 40,
    resizeMode: 'cover',
    backgroundColor: '#FBFBFB',
  },
  text_container: {flex: 1, justifyContent: 'center', marginLeft: 10},
  text: {color: 'black', fontSize: 20, fontWeight: '500'},
});
