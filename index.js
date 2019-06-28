module.exports = function(bundler){
    bundler.addAssetType('.js', require.resolve('Uglify','/assets/UglifyAsset').toString())
}

