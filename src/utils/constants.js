const GOOGLE_API_KEY = "AIzaSyCDuGZCJna6DNzE1BSlrBDjfpibWpyQTGo";
export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEO_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key="+GOOGLE_API_KEY+"&q=";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&key="+GOOGLE_API_KEY+"&q=";


export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&videoId=";
// Live Chat >>>>> Infinite scroll >>>>> Pagination
