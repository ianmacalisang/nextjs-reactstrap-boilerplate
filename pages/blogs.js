import React from 'react'
import Layout from '../components/layouts/mainLayout'

import {
  Row,
  Col
} from 'reactstrap'

import BlogArchive from '../components/blogs/archive'

const Blogs = props => (
  <React.Fragment>
    <Layout
    title="Blogs"
    >
      <Row>
        <Col sm='9'>
          <BlogArchive />
        </Col>
        <Col sm='3'>
          <h1>Right col</h1>
        </Col>
      </Row>
    </Layout>
    </React.Fragment>
)

export default Blogs