import React from 'react';
import { Font, AppLoading } from 'expo';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { Root } from "native-base";

import UserProfile from './src/components/UserProfile';
import PartyProfile from './src/components/PartyProfile';
import Search from './src/components/Search';
// import SignUp from './src/components/SignUp';
import Home from './src/components/Home';
import Post from './src/components/Post';
import SideBar from './src/shared-components/SideBar';

import SignUp from './src/containers/SignUp'
import Login from './src/containers/Login';

import store from './src/store';
import { get, remove } from './src/modules/cache';

class App extends React.Component {
  state = {
    ready: false,
    loggedIn: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-medium': require('./assets/fonts/Raleway-Regular.ttf'),
      'museosans-500': require('./assets/fonts/MuseoSans_500.ttf'),
      'SFProText-regular': require('./assets/fonts/SF-Pro-Text-Regular.ttf'),
      'SFProText-SemiBold': require('./assets/fonts/SFProText-SemiBold.ttf'),
      'Roboto': require("native-base/Fonts/Roboto.ttf"),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
      'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    const loggedIn = await get("token");
    this.setState({ ready: true, loggedIn });
  }

  render() {
    if(!this.state.ready) return <AppLoading />;
    return (
      <Root>
        <Provider store={store}>
          <Router>
            <Scene key='root'>
              <Scene 
                key='login'
                component={Login}
                hideNavBar
                initial={!this.state.loggedIn}
              />
              <Scene 
                key='signup'
                component={SignUp}
                hideNavBar 
              />
              <Drawer
                  hideNavBar
                  key="drawer"
                  contentComponent={SideBar}
                  drawerWidth={300}
                  drawerPosition="left"
                  open={false}
                  initial={this.state.loggedIn}
              >
                <Scene 
                  key='home'
                  component={Home}
                  hideNavBar
                />
              </Drawer>
            </Scene>
          </Router>
        </Provider>
      </Root>
    );
  }
}


export default App;