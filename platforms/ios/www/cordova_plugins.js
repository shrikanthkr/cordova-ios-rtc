cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-iosrtc/dist/cordova-plugin-iosrtc.js",
        "id": "cordova-plugin-iosrtc.Plugin",
        "clobbers": [
            "cordova.plugins.iosrtc"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-iosrtc": "1.4.5"
}
// BOTTOM OF METADATA
});