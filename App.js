/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './header.js';
import SuggestionList from './list.js';
import CategoryList from './employees.js';
import API from './Api.js';
import VerticalSeparator from './vertical-separator.js';


export default class App extends Component 
{
	state = 
	{
		suggestionList 	: [],
		suggestionList2	: [],
	}
	async componentDidMount()
	{
		const empleados  = await API.getEmployeesId(12528);
		const empleados2 = await API.getEmployees();
		this.setState
		({
			suggestionList  : empleados2,
			suggestionList2 : empleados,
		})		
	}
		
  	render() {
	  
    	return (
      		<View style={styles.container}>
			<Header/>  			
			<SuggestionList
				list={this.state.suggestionList}
			/>						
			<CategoryList
				list={this.state.suggestionList}
			/>			
      		</View>
    		);
  	}
}

const styles = StyleSheet.create(
{
	container: 
  	{
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
    	backgroundColor: '#F5FCFF',
  	},
  	welcome: 
	{
    	fontSize: 20,
    	textAlign: 'center',
    	margin: 10,
  	},
  	instructions: 
	{
    	textAlign: 'center',
    	color: '#333333',
    	marginBottom: 5,
  	},
});
