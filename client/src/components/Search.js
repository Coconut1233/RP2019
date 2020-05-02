import React, { Component } from 'react';
import Results from './Results';

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      title: '',
      class: '',
      year: 0,
      subject: '',
      mentor: '',
      keywords: '',
      papers: []
    }
  }

  searchPaper = (e) => {
    e.preventDefault();
    const paper = this.state;
    fetch(`/search?author=${paper.author}&title=${paper.title}&path=${paper.path}&class=${paper.class}&year=${paper.year}&subject=${paper.subject}&mentor=${paper.mentor}&keywords=${paper.keywords}`).then(res => {
      res.json().then(data => {
        this.setState({
          author: 'as',
          title: '',
          class: '',
          year: 0,
          subject: '',
          mentor: '',
          keywords: '',
          papers: data
        });
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Search</h2><br />
        <form onSubmit={this.searchPaper}>
          Autor: <br />
          <input type="text" name="author" id="1" onChange={e => this.setState({ [e.target.name]: e.target.value })} />
          <br />
                Title: <br />
          <input type="text" name="title" id="2" onChange={e => this.setState({ [e.target.name]: e.target.value })} />
          <br />
                Class: <br />
          <input type="text" name="class" id="3" onChange={e => this.setState({ [e.target.name]: e.target.value })} />
          <br />
                Year: <br />
          <input type="text" name="year" id="4" onChange={e => this.setState({ [e.target.name]: e.target.value })} />
          <br />
                Subject: <br />
          <input type="text" name="subject" id="5" onChange={e => this.setState({ [e.target.name]: e.target.value })} />
          <br />
                Mentor: <br />
          <input type="text" name="mentor" id="6" onChange={e => this.setState({ [e.target.name]: e.target.value })} />
          <br />
                Keywords: <br />
          <input type="text" name="keywords" id="7" onChange={e => this.setState({ [e.target.name]: e.target.value })} />
          <br />
          <input type="submit" value="Search" />
        </form>
        <Results key={this.state.papers}  data={this.state.papers}/>
      </div>
    )
  }
}

export default Search