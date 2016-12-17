## Synopsis
This repository contains Protein Tracker application. This application is developed in [DART](https://www.dartlang.org/). Dart is an application programming language that’s easy to learn, easy to scale, and deployable everywhere. Google depends on Dart to make very large apps.

## Installing DART
With [Chocolatey](https://chocolatey.org/), installing Dart is easy. The dart package contains the Dart SDK, which includes the Dart VM, libraries, and command-line Dart tools such as dart, dartanalyzer, pub, and dartdoc. If you are doing web development, you should also add one more tool:
>[Dartium](https://webdev.dartlang.org/tools/dartium): A special build of Chromium that includes a Dart VM. Use it to interactively test and debug Dart web apps without first compiling them to JavaScript.

```shell
choco install dart-sdk
choco install dartium
```

## Getting Started
Install [DART](https://www.dartlang.org/install/windows) followed by [npm](https://www.npmjs.com/package/npm) and [grunt](http://gruntjs.com/getting-started) if not already installed. Install grunt after npm is installed globally.
>npm install -g grunt-cli

Download all the packages using following commands before you start

```shell
npm update
bower update
```

## Run Application
Use the following command to run the project in your default browser
>gulp dev

## License
MIT license
