# DOM_Dynamo.js

##What?
A cross-browser javascript function which allows you to listen for dynamically loaded async elements. It's heavily based on the work of [Daniel Buchner](http://www.backalleycoder.com/) as presented by [David Walsh](https://davidwalsh.name/detect-node-insertion).

##How?
Included in this repository is an example html document which you are free to explore. The repo also provides a script you can call with `On_Element_Ready("element_id", function(){ <do this> });`

###Okay, but how does it actually work?

* We make a call to On_Element_Ready, sending it the id of the item we're waiting for along with a callback (the function to execute when it loads)
* The function will run it if the element already exists, or...
* It'll add styles to a stylesheet which applies an animation
* It adds an event listener to the document, waiting for that animation to play
* Then it'll wait until that animation plays, signifying that the element has loaded - and call the callback

##Why?
I work on the front end of a website that uses a lot of async code - often things like lightboxes or dynamically loaded forms. I've added this function to my library to handle the changing landscape of the DOM.

##Where (can I use it)?
This is a portfolio piece. You may use this in any project. Please let me know where/how you use it to give my portfolio some strength! If you write a blog, feel free to reproduce the code on your blog and provide a link back here. Don't forget to also give credit to Daniel Buchner and David Walsh for their major contributions.
