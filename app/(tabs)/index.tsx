import { StyleSheet,FlatList,Image,ScrollView } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Link } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import tw from 'twrnc';
import { StateContext } from '../../components/StateContext';
import { useContext } from 'react';


export default function TabOneScreen() {
  
  const [images, setImages] = useContext(StateContext);
  return (
 
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <View  />
      <FlatList
        horizontal
        data={images}
        style={{ height: 150, flex: 1, }}
        keyExtractor={(item) => item.uri}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            style={{
              width: 150,
              height: 150,
            }}
          />
        )}
      />
      <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign name="camerao" size={24} color="black"style={tw`mb-8`} />
                )}
              </Pressable>
            </Link>
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
