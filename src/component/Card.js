import React from 'react'


class Card extends React.Component {
  render() {
    return (
  <article className="dib w-100 mv2 ">
  <div className='bg-white br2 b--black-10 w-100 pa3 mh3 ba'>
    <div className="br-100 overflow-hidden dn"
    style={{backgroundImage: 'url("http://i.stack.imgur.com/2OrtT.jpg")', height:'40px', width:'40px'}}></div>
    <div className='dib v-top'>
    <h1 className="f4 ma0">Krever godkj Fritak</h1>
    <a className="lh-copy ma0 f6 blue">ID: aerLAgceSjDNhussB</a>
    </div>
    </div>
  </article>
    );
  }
}

export default Card
