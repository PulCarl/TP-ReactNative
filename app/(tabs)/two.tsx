import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import MapView, { Marker } from 'react-native-maps';

export default function TabOneScreen() {

 

  const onRegionChange = (region) => {
    
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maps</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <MapView 
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 43.586017756600704, 
          latitudeDelta: 0.5025074156660878, 
          longitude: 3.9008763805031776, 
          longitudeDelta: 0.4871595650911331
      }}
      >
        
      </MapView>
    </View>
  );
}

/*-{"latitude": 43.60190616563534, 
"latitudeDelta": 0.6742327180890939, 
"longitude": 3.875768221914768, 
"longitudeDelta": 0.6895717978477478}--*/

const styles = StyleSheet.create({
  container: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1/6,
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  separator: {
  
    marginBottom: 20,
    height: 1,
    width: '80%',
  },
  map: {
    flex: 6/6,
    width: '100%',

  }
});

