import React from 'react';
import 
{
  View,	Image, Text, StyleSheet
} from 'react-native';

function Suggestion(props) 
{
  	return (
    	<View style={styles.container}>
      		<View style={styles.left}>
        		<Image style={styles.cover} source={require('./logo.png')}/>
			</View>
        	<View style={styles.genre}>
          		<Text style={styles.genreText}>{props.id}</Text>
        	</View>
      	

      	<View style={styles.right}>
        	<Text style={styles.title}>{props.employee_name}</Text>
        	<Text style={styles.year}>{props.employee_age} Años</Text>
        	<Text style={styles.rating}>Salario: {props.employee_salary}</Text>      	
    	</View>
		</View>


  )
}

const styles = StyleSheet.create
({
  	container: 
	{
    	flexDirection: 'row',
  	},
  	genre: 
	{
    	position: 'absolute',
    	left: 0,
    	top: 0,
    	backgroundColor: 'black',
    	paddingVertical: 5,
    	paddingHorizontal: 7,
  	},
  	genreText: 
	{
    	color: 'white',
    	fontSize: 11,

  	},
  	cover: 
	{
    	height: 150,
    	width: 100,
    	resizeMode: 'contain'
  	},
  	right: 
	{
    	paddingLeft: 10,
    	justifyContent: 'space-between',
  	},
  	title: 
	{
    	fontSize: 18,
    	color: '#44546b'
  	},
  	year: 
	{
    	backgroundColor: '#70b124',
    	paddingVertical: 4,
    	paddingHorizontal: 6,
    	color: 'white',
    	fontSize: 11,
    	borderRadius: 5,
    	overflow: 'hidden',
    	alignSelf: 'flex-start'
  	},
  	rating: 
	{
    	color: '#6b6b6b',
    	fontSize: 14,
    	fontWeight: 'bold',
  	}

})

export default Suggestion
