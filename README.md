ollierogers.co.uk
=================

The source for [my website](http://www.ollierogers.co.uk "ollierogers.co.uk"). Runs on node.js. 

If you aren't running node you can install it here [node.js](http://nodejs.org/ "node project").

Once node is up and running clone this repo.

`cd` to the directory you cloned to. Then run `npm install` to install all project dependencies.

Once you have installed the project dependencies you will need to configure the site with [gulp](http://gulpjs.com/ "gulp project site"). Do this run `gulp` from the sites root. 

Finally run `node app` to run the site for production, then in your browser of choice go to `http://localhost:3000/`.

In development run `NODE_ENV=development node app`. If you have [nodemon](https://github.com/remy/nodemon "nodemon by Remy Sharp") installed then run `NODE_ENV=development nodemon app.js` to run the site in development.





