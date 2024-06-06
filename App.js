
import Cadastro from './componentes/Cadastro';
import Home from './componentes/Home';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  barStyle={{ backgroundColor: '#694fad' }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerTitleStyle:()=>{
              
            },
            headerBackgroundContainerStyle:{


            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color={color} />
            ),
          }}
          name="Cadastro"
          component={Cadastro}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
