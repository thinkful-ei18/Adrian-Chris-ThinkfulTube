'use strict';

const getVideos = (function() {
  const getVideos = {
    BASE_URL: 'https://www.googleapis.com/youtube/v3/search',
    API_KEY: 'AIzaSyDyGzb5XI8n8MSWyRZCesg6rIm9XJcNWMM',
  
    fetchVideos: function(searchTerm, callback) {
      const query = {
        key: getVideos.API_KEY,
        'maxResults': '6',
        'part': 'snippet',
        'q': `${searchTerm} in:name`
      };
      $.getJSON(getVideos.BASE_URL, query, callback);
    }
  };
  return {
    fetchVideos: getVideos.fetchVideos,
  };
}() );