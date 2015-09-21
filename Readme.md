#Client 


Go to platforms -> ios -> Import XCODE project


####Bridging header needs to be added

GO to Build phases -> Search for 'objective -c' -> double click on the right side of bridging headers and Drag and drop 'cordova-plugin-iosrtc-Bridging-Header' from files.

In case You end up with more errors.

Try adding 

libWebRTC-LATEST-Universal-Release.a to Embedded libraries.

**Steps** 

General -> Embedded Binaries -> + symbol -> Add Other /path-to-project/platform/ios/plugins/cordova-plugin-iosrtc/libWebRTC-LATEST-Universal-Release.a

---

#Server - Requires Node

brew install node (or) Download node from https://nodejs.org/en/

cd Server/server

npm install

node webrtc_server.js


---


A sample index.html is provided to check if server and client html is workinf fine