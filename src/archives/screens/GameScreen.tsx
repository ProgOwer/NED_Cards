import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
// import CardTinder from '../components/game/CardTinder';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Game'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the game</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <CardTinder></CardTinder> */}
      {/* <EditScreenInfo path="/screens/GameScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
