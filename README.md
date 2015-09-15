### Amoeba - a meteor.js agar.io clone
___

As part of my personal learning into http://meteor.com, I wanted to give myself the playful challenge of
creating a clone of the http://agar.io game.

#### Notes
This is a highly ephemeral code base. I'm playing here and getting to grips with Meteor specifics, implementing npm packages inside Meteor, reactive data sources and building a game. It's fun no doubt! 

Commits are generally made in pico sized "milestones" so should at least build =]

Due to Meteor still trying to parse js files __INSIDE__ the /private folder, I have had to move my Bower & Gulp dependencies into the hidden .vendor folder. "." folders __REALLY__ are left alone by Meteor it seems. 

I've committed my dependencies (I know a controversial topic) but this was a conscious choice at this stage of the game. If you need to do any installing, cd into the .vendor/gulp directoy & run Gulp. This will also fire of the Bower install =]
