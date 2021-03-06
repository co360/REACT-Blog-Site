import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GalleryImage from '../GalleryImage/GalleryImage';
import BlogPost from './BlogPost';


const BlogPosts = (props) =>
{
    const [PostData, updatePostData] = useState({data: {},
                                                position: 0});


    useEffect( () => {
        let data = null;
        axios.get('http://ec2-18-221-47-165.us-east-2.compute.amazonaws.com/posts/' + PostData.position + '/'+ (PostData.position + 15) + '/').then(response => {
            updatePostData({data: response.data,
                            position: PostData.position});
        });


    });

    const posts = Object.entries(PostData.data).map(
        (object, index) => 
        {
            return (<BlogPost key = {index}
                              title = {object[1]['post_title']}
                              author = {object[1]['author']}
                              content = {object[1]['post_content']}
                              date = {object[1]['date']}
                              images = {object[1]['images']}
                               />);
        }
    );

    return (
    <div>
       {posts}
    </div>);
}

export default BlogPosts;