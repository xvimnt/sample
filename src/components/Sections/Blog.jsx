import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  const loadBlogsData = async () => {
    // Query the API Gateway
    const response = await fetch("https://9e1dpdmq26.execute-api.us-east-1.amazonaws.com/Production/getBlogs")
    let data = await response.json()

    // Assign the response data to our state variable
    setBlogs(data)
  }

  useEffect(() => {
    // Load the menu links data from the API Gateway 
    loadBlogsData();
  }, [])

  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            {
              blogs.map((blog) => (
                <div key={blog.title} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <BlogBox
                    title={blog.title}
                    text={blog.text}
                    tag={blog.tag}
                    author={blog.author}
                    action={() => alert(blog.action)}
                  />
                </div>
              ))
            }
          </div>

          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;