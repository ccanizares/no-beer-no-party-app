
export default class SearchBeerService {
  constructor(){
    this.apiKey = "[ API KEY ]]";
    this.apiVersion = "2016-09-01";
    this.searchIndexUrl = "https://[ SEARCH RESOURCE NAME ].search.windows.net/indexes/beer/docs/search?api-version=" + this.apiVersion;
  }

  search(searchText)  {
    return fetch(this.searchIndexUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': this.apiKey
      },
      body: JSON.stringify({
        search: searchText,
        top: 100,
        facets: ['beerType'],
        orderby: 'rate desc, quantityPercen desc'
      })
    }).then((results) => {
      return results.json().then((data) => {
        return data.value;
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error)
    })
  }
}
