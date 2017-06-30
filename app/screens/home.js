import React, {Component}  from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, ListView, Dimensions } from 'react-native';
import SearchBar from 'react-native-searchbar';
import SearchBeerService from '../services/searchBeers';
import StarRating from 'react-native-star-rating';

const { width } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./beer-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      searchText: '', 
      dataSource: this.ds.cloneWithRows([]),
    }
    this.searchService = new SearchBeerService();
  }

  _handleResults = () =>{
    console.log('trying to get data');
    const searchText = (this.searchBar.getValue());
    this.setState({searchText: searchText});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={[]}
          handleResults={this._handleResults}
          showOnLoad
        />
      <ScrollView contentContainerStyle={styles.container}>
         <Button style={{marginBottom: 40}}
            onPress={() => {
              this.searchService.search(this.state.searchText)
                .then((data) => {
                  console.log(data);
                  this.setState({ dataSource: this.ds.cloneWithRows(data) })
                })
            }}
          title='Apply Search'
        />
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(rowData) => 
            <View style={styles.dataRow}>
              <View style={{maxWidth: 250 }}>
              <Text style={{ fontSize: 20 }}>{rowData.beerName}</Text>
              <Text style={{ fontSize: 15 }}>{rowData.beerType}</Text>
              <Text style={{ fontSize: 15 }}>STAND {rowData.stand}</Text>
              </View>
              <View style={{ position: 'absolute', right: 10, top: 10 }}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={rowData.rate}
                  starSize={20}
                  starColor={'#ffd714'}
                />
                <Text style={{ fontSize: 25 }}>{rowData.quantityPercen} %</Text>
              </View>
            </View>
          }
          style={{flex:1}}
        />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    backgroundColor: '#f4eded',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
  },
  dataRow: {
    padding: 10,
    margin:2, 
    flexDirection: 'row',
    flex: 1, 
    backgroundColor: '#fff', 
    width: width
  }
});