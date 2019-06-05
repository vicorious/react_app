import React, {Component} from 'react';
import {Text, View, Image, SafeAreaView, StyleSheet} from 'react-native';

export default class Header extends Component 
{
  render() {
    return (
      	<View>
      	<SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('./logo.png')}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})


