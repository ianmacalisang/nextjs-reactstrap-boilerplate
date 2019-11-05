import React from 'react'
import Layout from '../components/layouts/mainLayout'
import BlogArchive from '../components/blogs/archive'

const Blogs = props => (
  <React.Fragment>
    <Layout
    title="Blogs"
    >
        <BlogArchive 
        data={props.blogs}
        />
    </Layout>
  </React.Fragment>
)

Blogs.getInitialProps = async function() {
    const res = await fetch('https://api.xpertise.ae/blogs?_sort=id:DESC&_start=0&_limit=10');
    const data = await res.json();
    
    return {
      blogs: data
    };
};

export default Blogs