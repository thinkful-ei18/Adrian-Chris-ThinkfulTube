'use strict';

const videoList = (function () {
  const videoList = {
    generateVideoItemHtml: function(video) {
      // return `
      // <div class="video-container">
      //   <li class="video-info">
      //     <h1>Vide Title: ${video.title}</h1>
      //     <a href='https://www.youtube.com/watch?v=${video.id}' target="_blank">
      //     <img src="${video.thumbnail}" alt="Thumbnail for YouTube video: ${video.title}"/>
      //     </a>
      //     <p>Video ID: ${video.id}</p>
      //   </li>
      //   </div>
      // `
      
      return `<div class="video-container">
      <li class="video-info">
        <h1>Video Title: ${video.title}</h1>
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/${video.id}">
        </iframe>
        <p>Video ID: ${video.id}</p>
      </li>
      </div>`
      ;
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