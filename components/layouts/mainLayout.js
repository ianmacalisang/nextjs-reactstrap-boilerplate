import React from 'react'
import Head from 'next/head'
import {
    Container
} from 'reactstrap'

import NavMenu from '../header'
import Footer from '../footer'

const Layout = props => (
  <React.Fragment>
    <Head>
      <title>{props.title}</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </Head>
    <NavMenu />
    <Container>
        {props.children}
    </Container>
    <Footer/>
  </React.Fragment>
)

export default Layout