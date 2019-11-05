import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    Button,
    Col,
    Row
} from 'reactstrap'

const BlogArchive = () => {
    const [blogs, setBlogs] = useState()

    useEffect(() => {
      axios.get('https://api.xpertise.ae/blogs')
        .then(({data}) => {
          setBlogs(data)
        })
    },[])
    return blogs ? (
      <React.Fragment>
        <Row>
        {blogs.map(blog => (
          <Col sm="6" key={blog.id}>
            <Card>
            <CardImg top width="100%" src={blog.cover.url} alt={blog.title} />
            <CardBody>
              <CardTitle>{blog.title}</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          </Col>
          ))}
          </Row>
      </React.Fragment>
    ) : (
      <div>
        <h1>Loading</h1>
      </div>
    )
}
  
export default BlogArchive