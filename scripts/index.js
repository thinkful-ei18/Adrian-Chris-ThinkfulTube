'use strict';

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  videoList.handleFormSubmit();
});

// const sampleResponse = {
//   'kind': 'youtube#searchListResponse',
//   'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/S3dR1rDQzjWVxuVCgr5htE51yuc"',
//   'nextPageToken': 'CAUQAA',
//   'regionCode': 'US',
//   'pageInfo': {
//     'totalResults': 1000000,
//     'resultsPerPage': 5
//   },
//   'items': [
//     {
//       'kind': 'youtube#searchResult',
//       'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/MEvhVel-WA-P3pSa8q10GUZQkgs"',
//       'id': {
//         'kind': 'youtube#video',
//         'videoId': 'QJH2O4AoWHM'
//       },
//       'snippet': {
//         'publishedAt': '2017-03-01T02:59:58.000Z',
//         'channelId': 'UCoOYmfwfkfDRyRviumtVglA',
//         'title': 'DJ YASMIN IN THE NAME OF LOVE BREAKBEAT STYLE 2017',
//         'description': '',
//         'thumbnails': {
//           'default': {
//             'url': 'https://i.ytimg.com/vi/QJH2O4AoWHM/default.jpg',
//             'width': 120,
//             'height': 90
//           },
//           'medium': {
//             'url': 'https://i.ytimg.com/vi/QJH2O4AoWHM/mqdefault.jpg',
//             'width': 320,
//             'height': 180
//           },
//           'high': {
//             'url': 'https://i.ytimg.com/vi/QJH2O4AoWHM/hqdefault.jpg',
//             'width': 480,
//             'height': 360
//           }
//         },
//         'channelTitle': 'DJCantik',
//         'liveBroadcastContent': 'none'
//       }
//     },
//     {
//       'kind': 'youtube#searchResult',
//       'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/2Jhi85BB_eyxO8jR2vKiORLWSH4"',
//       'id': {
//         'kind': 'youtube#video',
//         'videoId': 'TCqcYSX20Tg'
//       },
//       'snippet': {
//         'publishedAt': '2016-11-13T00:30:00.000Z',
//         'channelId': 'UCSus1TrXtjqwmCidwqHc8OQ',
//         'title': 'BRAND NAME VS NO NAME SODA TASTE TEST EXPERIMENT: COULD YOU TELL THE DIFFERENCE!? (BUZZFEEED PARODY)',
//         'description': 'SWAZENATION instagram : https://www.instagram.com/ryanswaze twitter: https://twitter.com/ryanswaze snapchat: ryanswaze FOLLOW THE TEAM! Bongo : https://www.youtube.com/user/BongoBicher...',
//         'thumbnails': {
//           'default': {
//             'url': 'https://i.ytimg.com/vi/TCqcYSX20Tg/default.jpg',
//             'width': 120,
//             'height': 90
//           },
//           'medium': {
//             'url': 'https://i.ytimg.com/vi/TCqcYSX20Tg/mqdefault.jpg',
//             'width': 320,
//             'height': 180
//           },
//           'high': {
//             'url': 'https://i.ytimg.com/vi/TCqcYSX20Tg/hqdefault.jpg',
//             'width': 480,
//             'height': 360
//           }
//         },
//         'channelTitle': 'Ryan Swaze',
//         'liveBroadcastContent': 'none'
//       }
//     },
//     {
//       'kind': 'youtube#searchResult',
//       'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/TXV4LdiXnlrIRefaHiJWHqN98sE"',
//       'id': {
//         'kind': 'youtube#video',
//         'videoId': 'SMZ9Cef_9ps'
//       },
//       'snippet': {
//         'publishedAt': '2017-12-15T22:20:04.000Z',
//         'channelId': 'UCrl_sx4ac0KjKpLbcXlOOuw',
//         'title': 'BRAND NAME VS. GENERIC SODA TASTE TEST!!',
//         'description': 'BRAND NAME VS. GENERIC SODA TASTE TEST!! Some people may think that there is a huge difference between brand name and generic soda, so we decided to see if we could tell the difference. Rules:...',
//         'thumbnails': {
//           'default': {
//             'url': 'https://i.ytimg.com/vi/SMZ9Cef_9ps/default.jpg',
//             'width': 120,
//             'height': 90
//           },
//           'medium': {
//             'url': 'https://i.ytimg.com/vi/SMZ9Cef_9ps/mqdefault.jpg',
//             'width': 320,
//             'height': 180
//           },
//           'high': {
//             'url': 'https://i.ytimg.com/vi/SMZ9Cef_9ps/hqdefault.jpg',
//             'width': 480,
//             'height': 360
//           }
//         },
//         'channelTitle': 'Double Ay',
//         'liveBroadcastContent': 'none'
//       }
//     },
//     {
//       'kind': 'youtube#searchResult',
//       'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/etC951VvxksKG6hSfQgJVaUPK1o"',
//       'id': {
//         'kind': 'youtube#video',
//         'videoId': 'PymTqoKeT8I'
//       },
//       'snippet': {
//         'publishedAt': '2017-05-27T20:01:42.000Z',
//         'channelId': 'UCGCPAOQDZa_TTTXDr5byjww',
//         'title': 'MIXING EVERY SODA FLAVOR TOGETHER - TASTE EXPERIMENT!',
//         'description': 'TODAY I MIX TOGETHER EVERY SODA FLAVOR AND TRINK IT! Download Best Fiends for FREE http://download.BestFiends.com/BootCamp PURCHASE MY NOVEL: http://joeygraceffa.com/children-of-eden-book...',
//         'thumbnails': {
//           'default': {
//             'url': 'https://i.ytimg.com/vi/PymTqoKeT8I/default.jpg',
//             'width': 120,
//             'height': 90
//           },
//           'medium': {
//             'url': 'https://i.ytimg.com/vi/PymTqoKeT8I/mqdefault.jpg',
//             'width': 320,
//             'height': 180
//           },
//           'high': {
//             'url': 'https://i.ytimg.com/vi/PymTqoKeT8I/hqdefault.jpg',
//             'width': 480,
//             'height': 360
//           }
//         },
//         'channelTitle': 'Joey Graceffa',
//         'liveBroadcastContent': 'none'
//       }
//     },
//     {
//       'kind': 'youtube#searchResult',
//       'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/TKSwRaYyyS4C3M9fkfmEC9EAbKk"',
//       'id': {
//         'kind': 'youtube#channel',
//         'channelId': 'UCtu2BCnJoFGRBOuIh570QWw'
//       },
//       'snippet': {
//         'publishedAt': '2012-04-11T03:11:17.000Z',
//         'channelId': 'UCtu2BCnJoFGRBOuIh570QWw',
//         'title': 'Sodapoppin',
//         'description': '',
//         'thumbnails': {
//           'default': {
//             'url': 'https://yt3.ggpht.com/-uNBMVkuSew0/AAAAAAAAAAI/AAAAAAAAAAA/06Lj2CiAGMs/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
//           },
//           'medium': {
//             'url': 'https://yt3.ggpht.com/-uNBMVkuSew0/AAAAAAAAAAI/AAAAAAAAAAA/06Lj2CiAGMs/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'
//           },
//           'high': {
//             'url': 'https://yt3.ggpht.com/-uNBMVkuSew0/AAAAAAAAAAI/AAAAAAAAAAA/06Lj2CiAGMs/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'
//           }
//         },
//         'channelTitle': 'Sodapoppin',
//         'liveBroadcastContent': 'none'
//       }
//     }
//   ]
// };

// const API_KEY = 'AIzaSyDyGzb5XI8n8MSWyRZCesg6rIm9XJcNWMM'; // Adrian's api key

// const store = {
//   videos: []
// };

// TASK: Add the Youtube Search Base URL here: GET 
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
// const BASE_URL = 'https://www.googleapis.com/youtube/v3/search'; // Done!

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
// const fetchVideos = function(searchTerm, callback) {

//   const query = {
//     key: API_KEY,
//     'maxResults': '5',
//     'part': 'snippet',
//     'q': `${searchTerm} in:name`
//   };

//   $.getJSON(BASE_URL, query, callback);
// };

// Testing out fetchVideos below:
// fetchVideos('soda', function (response) {
//   console.log(response);
// });


// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array -- OK.
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
// const decorateResponse = function(response) {
//   let videos = response.items.map(function (item) {
//     const id = item.id.videoId;
//     const title = item.snippet.title;
//     const thumbnail = item.snippet.thumbnails.high.url;
//     return {
//       id,
//       title,
//       thumbnail
//     };
//   });
//   store.addVideosToStore(videos);
//   videoList.render();
// };

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
// const generateVideoItemHtml = function(video) {
//   return `
//     <li>
//       <span>id: ${video.id}</span>
//       <span>title: ${video.title}</span>
//       <img src="${video.thumbnail}" alt="Thumbnail for ${video.title}"/>
//     </li>
//   `;
// };

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.videos
// TEST IT!
// const addVideosToStore = function(videos) {
//   store.videos = videos;
// };

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
// const render = function() {
//   const videos = store.videos;
//   const videosMap = videos.map(video => generateVideoItemHtml(video));
//   $('.results').html(videosMap);
// };

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function
// TEST IT!
// const handleFormSubmit = function() {
//   $('.search-form').submit(event => {
//     event.preventDefault();
//     const searchTarget = $(event.currentTarget).find('#search-term');
//     const searchTerm = searchTarget.val();
//     searchTarget.val('');
//     getVideos.fetchVideos(searchTerm, decorateResponse);
//   });
// };
