const path = require('path');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withVideos = require('next-videos');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
    compress: true,
    webpack(config, {webpack}){
        const prod = process.env.NODE_ENV === 'production';
        const plugins = [...config.plugins];
        
        return {
            ...config,
            mode: prod? 'production' : 'development',
            devtool: prod? 'hidden-source-map' : 'eval',
            plugins,
            
        };
    },
});
// module.exports=withImages();
module.exports = withPlugins(
    [
        [withImages, {}],
        [withVideos, {}],
    ], nextConfig
    // {
     //global config here   
       
    //}
);
    

    
