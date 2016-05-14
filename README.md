# What is this project? 

The purpose of this repository is to provide a example project about Polymer Paper Elements + Apache Cordova.

```bash
git clone https://github.com/horochovec/polymer-elements-showcase.git
```

# Structure
- polymer-elements-showcase (root folder)
  * source/ (Used for the source files of project)
  * mobile/ (Used to Apache Cordova Project)
  * crosswalk/ (Used to Apache Cordova Project with Crosswalk Project)

# Steps to configure:

```bash
cd polymer-elements-showcase
```

```bash
npm install -g bower
```

```bash
npm install -g gulp
```

```bash
npm install -g cordova
```

```bash
cordova create mobile [YOUR-DOMAIN] [PROJECT-NAME]
```

```bash
cordova create crosswalk [YOUR-DOMAIN] [PROJECT-NAME]
```

```bash
cd source
bower install
npm install
```

```bash
cd mobile
cordova platform add ios --save
cordova platform add android --save
```

```bash
cd crosswalk
cordova platform add android --save
cordova plugin add cordova-plugin-crosswalk-webview --save
```

# Steps to build this project

At index.html, uncomment the script import to cordova.js;
At index.html, uncomment the link import to vulcanize/vulcanize.html;
At index.html, comment the link import to imports.html;

```bash
cd source
gulp vulcanize
gulp production
gulp mobile
gulp crosswalk
```

# Steps to work in this project

At index.html, comment the script import to cordova.js;
At index.html, comment the link import to vulcanize/vulcanize.html;
At index.html, uncomment the link import to imports.html;

```bash
cd source
gulp dev
```