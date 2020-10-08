import axios from "axios";

class Youtube {
  constructor() {
    this.youtube = axios.create({
      baseURL: `https://www.googleapis.com/youtube/v3`,
      params: {},
    });
  }
  async getVideos() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 28,
        key: "AIzaSyDmFSmzx7DPvUzPOvS9dHY72fkRqxBeAlU",
      },
    });
    const videos = response.data.items;
    return videos;
  }

  async onSearch(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 28,
        q: query,
        type: "video",
        key: "AIzaSyDmFSmzx7DPvUzPOvS9dHY72fkRqxBeAlU",
      },
    });
    const videos = response.data.items;
    return videos;
  }
}

export default Youtube;
