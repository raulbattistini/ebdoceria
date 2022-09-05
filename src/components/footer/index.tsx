import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import defaultImg from '../../assets/images/default.jpg'

interface IPost {
  src?: string;
  url: string;
  id: number;
  likes: number;
  comments: number;
  caption: string;
}

export const Footer = () => {
  // useEffect hook to fetch posts when component mounts
  useEffect(() => {
    // fetchPosts(); to be enabled when facebook app created
  }, []);

  // useState hook to start with empty object for the map in render() section
  const [postData, setPostData] = useState<any>({
    src: "",
    url: "",
    id: 0,
    likes: 0,
    comments: 0,
    caption: "",
  });

const fetchPosts = async () => {
  // try {
  let INSTAGRAM_ID = "your-profile-id";
  let THUMBNAIL_WIDTH = 640;
  let PHOTO_COUNT = 4;
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${INSTAGRAM_ID}","first":${PHOTO_COUNT},"after":null}`
  ); // keep in mind heroku dynos free tier will be unavailable by november 2022
  const { data } = await response.json();
  const photos = data.user.edge_owner_to_timeline_media.edges.map(
    ({ node }: any) => {
      const { id } = node;
      const comments = node.edge_media_to_comment.count;
      const likes = node.edge_media_preview_like.count;
      const caption = node.edge_media_to_caption.edges[0].node.text;
      const thumbnail = node.thumbnail_resources.find(
        (thumbnail: { config_width: number }) =>
          thumbnail.config_width === THUMBNAIL_WIDTH
      );
      const { src, config_width: width, config_height: height } = thumbnail;
      const url = `https://www.instagram.com/p/${node.shortcode}`;
      return {
        id,
        caption,
        src,
        width,
        height,
        url,
        comments,
        likes,
      };
    }
  )};

  // } catch (error: any) {
  //   console.log(error);
  // }
  return (
    <div className="bg-[#A0A934]">
      <span className="font-inter text-3xl font-thin pl-24 pt-2 pb-2 top-10 text-white flex">
        Nossas mídias sociais
      </span>
      <span className="font-inter text-lg font-thin pl-24 pt-2 pb-2 top-10 text-white flex">
        {" "}
        Últimos posts
      </span>
      <div>
        {/* {postData?.photos.map(
          ({ src, url, id, likes, comments, caption }: IPost | any) => {
            return (
              <>
                <Grid container>
                  <Grid item xs={3}>
                    {" "}
                    <a
                      href={url}
                      target="_blank"
                      className="post-item"
                      rel="noopener noreferrer"
                      key={id}
                    >
                      <img
                        src={src}
                        className="post-image"
                        alt={caption.substring(0, 40)}
                      />
                      {/*  */}
        {/* <div className="post-item-info">
                        <ul>
                          <li className="post-item-likes">
                            <span role="img" aria-label="heart">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="white"
                                style={{
                                  fontSize: "14px",
                                  lineHeight: "1.45",
                                }}
                              >
                                <path d="M12 4.435C10.011-.964 0-.162 0 8.003 0 12.071 3.06 17.484 12 23c8.94-5.516 12-10.929 12-14.997C24-.115 14-.996 12 4.435z"></path>
                              </svg>
                            </span>{" "}
                            {likes !== null ? likes.toLocaleString() : 0}
                          </li>
                          <li className="post-item-comments">
                            <span role="img" aria-label="speech-balloon">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="white"
                                style={{
                                  fontSize: "14px",
                                  lineHeight: "1.45",
                                }}
                              >
                                <path d="M24 9.874C24 4.42 18.627 0 12 0S0 4.42 0 9.874c0 4.512 3.678 8.317 8.701 9.496L12 24l3.299-4.63C20.322 18.19 24 14.385 24 9.874z"></path>
                              </svg>
                            </span>{" "}
                            {comments !== null ? comments.toLocaleString() : 0}
                          </li>
                        </ul>
                      </div>
                    </a>
                  </Grid>
                </Grid>
              </>
            );
          } unable to map over posts while app not authorized. error 'trying to read map over undefined'
        )} */}
      </div>
      {/* sample for layout view purposes. if React <=17 react-embed lib is an option */}
      <Grid container className="divide-x">
        <Grid item xs={3}>
            <img src={defaultImg} alt="Place image..." />
        </Grid>
        <Grid item xs={3}>
            <img src={defaultImg} alt="" />
        </Grid>
        <Grid item xs={3}>
            <img src={defaultImg} alt="" />
        </Grid>
        <Grid item xs={3}>
            <img src={defaultImg} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};
