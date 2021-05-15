import * as React from 'react';
import { Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style';
import HeaderTitle from './components/HeaderTitle';
import { LeftContainer, RightContainer } from './components/PageHeader';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';
import HomeScreen from '../screens/HomeScreen';
import IReload from '../assets/icons/reload.ico';

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function HomeTab({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name='HomeScreen'
          component={(props) => (
            <HomeScreen {...props} tabNavigation={navigation} />
          )}
          options={{
            header: (props) => <HeaderTitle {...props} />,
          }}
        />
        <Stack.Screen name='DetailScreen' component={DetailsScreen} />
        <Stack.Screen
          name='Schedule'
          options={{
            // header: (props) => <HeaderTitle {...props} />,
            headerLeft: (props) => (
              <LeftContainer
                title={'Lịch học'}
                subTitle={'Chọn ngày để xem chi tiết lịch học'}
                {...props}
              />
            ),
            headerRight: () => (
              <RightContainer>
                <IReload />
              </RightContainer>
            ),
            headerTitle: '',
          }}
          component={ScheduleScreen}
        />
      </Stack.Navigator>
    </View>
  );
}

function SettingTab() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
import ICalender from '../assets/icons/calender.ico';
import IPen from '../assets/icons/pen.ico';
import IDiamond from '../assets/icons/diamond.ico';
import ICup from '../assets/icons/cup.ico';
import IHome from '../assets/icons/home.ico';
import IHamberger from '../assets/icons/hamberger.icon';

const navigateIcons = {
  Home: {
    icon: IHome,
  },
  Settings: {
    icon: IHamberger,
  },
  Calender: {
    icon: ICalender,
  },
  Tuition: {
    icon: IDiamond,
  },
  Mark: {
    icon: ICup,
  },
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const Icon = navigateIcons[route.name].icon;

          if (route.name == 'Calender')
            return (
              <View style={styles.calenderButton}>
                <Icon color={color} />
              </View>
            );
          return <Icon color={color} />;
        },
        tabBarLabel: ({ color, focused }) => {
          if (route.name == 'Calender') {
            return undefined;
          }
          if (focused)
            return <Text style={styles.tabBarLabelFocus}>{route.name}</Text>;
          return <Text style={styles.tabBarLabel}>{route.name}</Text>;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#59a64a',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Home' component={HomeTab} />
      {/* <Tab.Screen name='Mark' component={SettingTab} />
      <Tab.Screen name='Calender' component={ScheduleScreen} />
      <Tab.Screen name='Tuition' component={SettingTab} /> */}
      <Tab.Screen name='Settings' component={SettingTab} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
