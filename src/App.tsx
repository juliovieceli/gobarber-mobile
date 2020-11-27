import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import AppProvider from './hooks';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </AppProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#312e38"
        translucent
      />
    </NavigationContainer>
  );
};

export default App;
