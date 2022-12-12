import axios from "axios";

const getPosts = async (posts: any) => {
  try {
    const instagramUsername = "rbattistini_";
    const res = await axios.get(`https://www.instagram.com/${instagramUsername}/?__a=1`);
    return res.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Internal Server error"
    );
  }
};

export { getPosts };
