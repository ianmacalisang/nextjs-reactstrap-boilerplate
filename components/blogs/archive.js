import React from 'react'
import Link from 'next/link'
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
} from 'reactstrap'

const BlogArchive = props => (
    <React.Fragment>
        {props.data.map(blog => (
        <li key={blog.id}>
          <Link href="/p/[id]" as={`/p/${blog.id}`}>
            <a>{blog.title}</a>
          </Link>
        </li>
      ))}
    </React.Fragment>
)
  
export default BlogArchive