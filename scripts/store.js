'use strict';

const store = (function () { 
  const store = {
    videos: [],
    addVideosToStore: function(videos) {
      this.videos = videos;
    }
  };
  return {
    addVideosToStore: store.addVideosToStore,
  };
}() );