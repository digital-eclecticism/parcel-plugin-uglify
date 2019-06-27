module.exports = function(bundler){
    bundler.addAssetType('.js', require.resolve('Uglify',{"path": '/assets/UglifyAsset'}))
    // bundler.addAssetType('.css', require.resolve('./assets/UglifyAsset'))
}

