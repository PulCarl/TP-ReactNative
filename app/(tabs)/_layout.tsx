import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Galerie photo',
          tabBarIcon: ({ color }) => <AntDesign name="picture" size={24} color={color} />,
        }}
      />
       <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign name="camerao" size={24} color="black" />
                )}
              </Pressable>
            </Link>
      <Tabs.Screen
        name="two"
        options={{
          title: 'Carte',
          tabBarIcon: ({ color }) => <Feather name="map" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
