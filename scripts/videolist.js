'use strict';

const videoList = (function () {
  const videoList = {
    generateVideoItemHtml: function(video) {
      return `
        <li>
          <span>id: ${video.id}</span>
          <span>title: ${video.title}</span>
          <img src="${video.thumbnail}" alt="Thumbnail for ${video.title}"/>
        </li>
      `;
    },
    render: function() {
      const videos = store.videos;
      const videosMap = videos.map(video => videoList.generateVideoItemHtml(video));
      $('.results').html(videosMap);
    },
    decorateResponse: function(response) {
      let videos = response.items.map(function (item) {
        const id = item.id.videoId;
        const title = item.snippet.title;
        const thumbnail = item.snippet.thumbnails.high.url;
        return {
          id,
          title,
          thumbnail
        };
      });
      store.addVideosToStore(videos);
      videoList.render();
    },
    handleFormSubmit: function() {
      $('.search-form').submit(event => {
        event.preventDefault();
        const searchTarget = $(event.currentTarget).find('#search-term');
        const searchTerm = searchTarget.val();
        searchTarget.val('');
        getVideos.fetchVideos(searchTerm, videoList.decorateResponse);
      });
    }
  };
  return {
    handleFormSubmit: videoList.handleFormSubmit,
  };
}() );