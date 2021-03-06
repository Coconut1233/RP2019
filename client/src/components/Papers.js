import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';

class Papers extends Component {
  constructor() {
    super();
    this.state = {
      papers: []
    };
  }

  async componentDidMount() {
    const res = await fetch('/papers/');
    const data = await res.json();
    this.setState({ papers: data });
  }

  renderPaper = ((paper) =>
    <Link to={`/paper/${paper.id}`} key={paper.id}>
      <div className="paper">
        <div className="paper-text">
          <h3 className="">{paper.title}</h3>
          <p className="">{paper.author}</p>
          <p className="">{paper.subject}</p>
        </div>
      </div>
    </Link>
  );

  render() {
    if(this.state.papers.length==0){
      return(
        <div>
        <Header />
        <h1 className="no-paper-error">No papers found</h1>
        </div>
      )
    }
    return (
      <div>
        <Header />
        <div className="papers">
          {this.state.papers.map(paper => this.renderPaper(paper))}
        </div>
      </div>
    );
  }
}

export default Papers;
