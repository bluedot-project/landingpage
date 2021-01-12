const path = require('path');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withVideos = require('next-videos');

// module.exports=withImages();
module.exports = withPlugins(
    [
        [withImages, {}],
        [withVideos, {}],
    ],
    {
     //global config here   
    }
)
    

    
