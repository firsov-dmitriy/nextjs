import axios from "axios";
class Post {
  async fetchAllPost() {
    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchOnePost(id: number = 1) {
    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id > 100 ? 1 : id}`
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Post();
