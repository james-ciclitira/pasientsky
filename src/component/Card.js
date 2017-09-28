import React from 'react'


class Card extends React.Component {
  render() {
    return (

  <article className="dib w-third-ns w-100-m">
  <div className='pv3 ph3'>
  <div className='bg-white br3 b--black-10 w-100 pa4-ns mh3 ba'>
    <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 db"/>
    <h1 className="f4">Patient name</h1>
    <p className="lh-copy measure center f6 black-70">Quite affectionate and outgoing.</p>
    </div>
    </div>
  </article>
    );
  }
}

export default Card
