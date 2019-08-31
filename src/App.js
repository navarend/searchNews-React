import React, { Component, Fragment } from 'react';
import Header from './components/header';
import NewsList  from './components/newsList';
import Search  from './components/search';

class App extends Component{
  state = { 
    news : []
  }

  componentDidMount(){
    this.checkNews();
  }

  checkNews = async ( category = 'business') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ category }&apiKey=f9909a85725b46bfadc41a2ee5c6de63`;
    const result = await fetch(url);
    const newsJson = await result.json();

    this.setState({
      news : newsJson.articles
    })
  }

  render(){
    return ( 
      <Fragment>
        <Header title='Search News'></Header>
        <div className="container white news-container">
          <Search reviewNew={ this.checkNews }></Search>
          <NewsList news={ this.state.news }></NewsList>
        </div>
      </Fragment>
    );
  }
}

export default App;
