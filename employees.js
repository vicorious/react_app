import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import Empty from './empty';
import Separator from './horizontal_separator.js';
import Employee from './employee.js';
import EmployeesLayout from './employees-layout';
import {connect} from 'react-reduce'; 


function mapSateToProps(_state)
{
  debugger.
}

class EmployeeList extends Component 
{
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => 
  {
    return (
      <Employee {...item}/>
    )
  }
  render() 
  {
    return (
		<EmployeesLayout title = "Empleados 2">
      <FlatList
        horizontal={true}
        keyExtractor={this.keyExtractor}
        data={this.props.list}
        ListEmptyComponent={this.renderEmtpy}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={this.renderItem}
      />
	  </EmployeesLayout>
    )
  }
}

export default connect(mapSateToProps)EmployeeList;