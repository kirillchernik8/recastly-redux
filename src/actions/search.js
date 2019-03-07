import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  // instead of return {...}
  return function thunk(dispatch){
    searchYouTube(q, (videos) => {
      dispatch({
        type: 'CHANGE_VIDEO_LIST',
        videos
      })
    })
  }
};

export default handleVideoSearch;
