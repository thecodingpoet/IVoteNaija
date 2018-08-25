import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title , Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const HeaderTab = ({menu, back, title, share}) => {
  return (
    <Header style={styles.header} hasTabs>
      <Left>
        { menu && 
          <Button transparent onPress={() => Actions.drawerOpen()}>
            <Icon name='menu' type='MaterialCommunityIcons' style={{color: '#3F3F3F', marginLeft: 10 }}/> 
          </Button> }
        { back && 
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name='chevron-left' type='MaterialCommunityIcons' style={{color: '#3F3F3F', marginLeft: 10 }}/>
        </Button> }
      </Left>
      <Body>
        <Text style={[styles.text, styles.title]}>{title}</Text>
      </Body>
      <Right>
        { share && <Button transparent onPress={() => alert('Shared!')}><Text style={[styles.text, styles.share]}>Share</Text></Button>}
      </Right>
    </Header>
  );
}

export default HeaderTab;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomWidth:0,
    shadowColor: "#000000",
    shadowOpacity: 0.07,
    shadowRadius: 9,
    shadowOffset: {
      height: 2,
      width: 0
    }
  },
  text: {
    fontFamily: 'museosans-500',
    fontSize: 16
  },
  title: {
    color: '#3F3F3F',
  },
  share: {
    color: '#628AFF'
  }
});