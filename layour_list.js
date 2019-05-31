import React from 'react';

import {
	View, Text, StyleSheet
} from 'react-native';


function SuggestionListLayout(props)
{
	return (
	
		<View>		
			<Text>{props.title}</Text>
			{props.children}		
		</View>
	
	)
}

export default SuggestionListLayout;