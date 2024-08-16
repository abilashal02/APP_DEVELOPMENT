import React from "react";
import PageHeading from "../common/PageHeading";
import './Blog.css';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Latest Fashion Trends',
    excerpt: 'Discover the latest fashion trends of the season with our exclusive insights...',
    image: 'https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s=',
    date: 'July 15, 2024',
  },
  {
    id: 2,
    title: 'How to Style Your Summer Wardrobe',
    excerpt: 'Get tips on how to elevate your summer wardrobe with these essential styling tips...',
    image: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg',
    date: 'July 22, 2024',
  },
  {
    id: 3,
    title: 'How to Style Your Summer Wardrobe',
    excerpt: 'Get tips on how to elevate your summer wardrobe with these essential styling tips...',
    image: 'https://cdn.cheapism.com/images/Landsend.max-784x410.jpg',
    date: 'July 22, 2024',
  },
  // Add more blog posts as needed
];
const Blog = () => {
  return (
   
      <div className="blog-container">
      <PageHeading home={"home"} pagename={"Blog"} />
      <h1 className="blog-title"></h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-date">{post.date}</p>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more-link">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
      
  );
};

export default Blog;
