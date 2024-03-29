import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import defaultImg from "../../assets/images/default.jpg";
import facebook from "../../assets/images/icons/facebook.png";
import instagram from "../../assets/images/icons/instagram.png";
// import { getPosts } from "../../utils/services/getPosts";

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
    console.log(postData);
  }, []);

  // useState hook to start with empty object for the map in render() section
  const [postData, setPostData] = useState<any>({});
  // https://developers.facebook.com/docs/graph-api/reference/instagram-oembed/

  return (
    <div className="">
      <span className="text-xl font-light justify-center pt-2 pb-2 top-10 text-white flex bg-[#662606] pocket:text-md">
        Nossas mídias sociais
      </span>
      <span className="text-lg font-light justify-center pt-2 pb-2 top-10 text-[#211e1e] flex bg-[#fefae0]">
        {" "}
        Últimos posts
      </span>
      {/* <div>
        {postData?.photos.map(
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

                      <div className="post-item-info">
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
          }
        )}
      </div> */}
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
      <div className="grid-cols-2 text-xl text-[#211e1e] bg-[#fefae0]">
        <div className="flex">
          <span className="pl-2 pocket:text-sm text-[#211e1e] pt-8 font-extralight">
            {" "}
            Para mais conteúdo, consulte nossas redes sociais:{" "}
          </span>
        </div>
        <section className="flex py-2">
          <a href="https://www.facebook.com/EBDoceria" target="_blank" className="justify-center flex">
            <BsFacebook className="relative w-8 h-8 object-cover hover:text-[#dda15e] duration-300 cursor-pointer" />
          </a>
          <a href="https://instagram.com/_elisabetebattistini" className="justify-center flex">
            <BsInstagram className="relative w-8 h-8 hover:text-[#dda15e] duration-300 cursor-pointer" />
          </a>
        </section>
      </div>
    </div>
  );
};
