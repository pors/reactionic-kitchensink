# React-Ionic Demo #

[![Join the chat at https://gitter.im/pors/reactionic](https://badges.gitter.im/pors/reactionic.svg)](https://gitter.im/pors/reactionic?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This repository contains a "kitchen sink" demo for the [React-Ionic](http://reactionic.github.io/) library.

It shows the features of the library in a single app and can also be used as a starting point for your own app.

**Table of Contents**

  - [About React-Ionic](#about-react-ionic)
  - [Installation for Meteor](#installation-for-meteor)
    - [Prerequisites](#prerequisites)
    - [Install, build and run](#install-build-and-run)
  - [Installation with Webpack](#installation-with-webpack)
    - [Prerequisites](#prerequisites-1)
    - [Install, build and run](#install-build-and-run-1)
  - [Next Steps](#next-steps)

## About React-Ionic ##

React-Ionic is a library that allows you to create modern hybrid apps for both iOS and Android. It combines the power of [React](https://facebook.github.io/react/) with the robustness of [Ionic](http://ionicframework.com/).

Read more about React-Ionic [here](http://reactionic.github.io/).

The actual library can be found [here](https://github.com/reactionic/reactionic).

The kitchen sink demo app can be installed in a number of ways, here we show you two options:

* Installation for Meteor.
* Installation with Webpack.

Let me know if you are looking to use the library in another way: mark (a) pors (dot) net.


## Installation for Meteor ##

### Prerequisites ###

You need to have a global installation of node and npm. The commands below should result in something like this:

    $ node -v
    v4.3.1
    
    $ npm -v
    3.7.5

If you have an old version or it is not installed at all follow the instructions here: [nodejs.org](https://nodejs.org/)


And of course Meteor needs to be installed. If you haven't installed it yet, here is
how: [meteor.com](https://www.meteor.com/install)

### Install, build and run ###

Installation is straightforward:

* Download the zip file [here](https://github.com/reactionic/reactionic-kitchensink/archive/master.zip)
* Unzip the file

Then in a terminal:

    cd reactionic-kitchensink
    npm install
    cd app
    meteor run

Note that this installation relies on Meteor 1.3 (with npm package support). Installation for an older version of Meteor is also possible, but needs some more work. Let me know if you are interested in this (see my email above).


## Installation with Webpack ##

### Prerequisites ###

You need to have a global installation of node and npm. The commands below should result in something like this:

    $ node -v
    v4.3.1
    
    $ npm -v
    3.7.5
    
If you have an old version or it is not installed at all follow the instructions here: [nodejs.org](https://nodejs.org/)

You also need a global installation of webpack and webpack-dev-server, check if you have it like this:
    
    $ webpack 2>&1 >/dev/null | head -1
    webpack 1.12.14
    
    $ webpack-dev-server --help 2>&1 >/dev/null | head -1
    webpack-dev-server 1.14.1

If needed these packages can be installed with:

    sudo npm install webpack webpack-dev-server -g
    
    
Or without the `sudo`, depending on your setup.


### Install, build and run ###

Installation is straightforward:

* Download the zip file [here](https://github.com/reactionic/reactionic-kitchensink/archive/master.zip)
* Unzip the file

Then in a terminal:

    cd reactionic-kitchensink
    npm install
    webpack
    webpack-dev-server --content-base build


## Next Steps ##

The [source code](https://github.com/reactionic/reactionic-kitchensink) of the kitchen sink demo should help you create your own app. 

Also have a look at the [guide](https://github.com/reactionic/reactionic/blob/master/GUIDE.md) for more detail.

