import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';

import SuggestionListLayout from './layour_list.js';
import Empty from './empty.js';
import VerticalSeparator from './vertical-separator.js';
import Suggestion from './suggestion.js';

class SuggestionList extends Component {
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <VerticalSeparator />
  renderItem = ({item}) => {
    return (
      <Suggestion {...item}/>
    )
  }
  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1',
      },
      {
        title: 'Pokemon',
        key: '2'
      }
    ]
    return (
      <SuggestionListLayout
        title="Recomendado para ti"
        >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionListLayout>
    )
  }
}

export default SuggestionList