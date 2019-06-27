const { Asset } = require('parcel-bundler');
const UglifyJS = require("uglify-js");

class UglifyAsset extends Asset {
    constructor(){
        this.type = 'js';
    }
    async transform(){
        let options = { toplevel: true, warnings: true, verbose: true, ie8: true }
        let compiled = UglifyJS.minify(this.contents.toString(), options);
        return compiled.code;
    }
    async generate(){
        const code = this.transform()
        return [ {
            type: 'js',
            value: code,
        }]
    }
}
module.exports = UglifyAsset;