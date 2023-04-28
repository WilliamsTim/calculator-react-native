import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
        </View>
        <View style={styles.Row}>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
        </View>
        <View style={styles.Row}>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
        </View>
        <View style={styles.Row}>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
        </View>
        <View style={styles.Row}>
          <Pressable style={styles.lastCalc}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
          <Pressable style={styles.calcButtons}><Text>AC</Text></Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Column: {
    height: '57.69%',
    justifyContent: 'space-evenly',
  },
  calcButtons: {
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    height: 70,
    width: 70,
    color: 'black',
  },
  lastCalc: {
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    height: 70,
    width: 155,
    color: 'black',
  },
});
