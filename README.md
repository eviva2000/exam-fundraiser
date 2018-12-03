# First time:

```
$ git clone https://github.com/RytisDr/exam-fundraiser .
```

_the dot at the end clones it into the current folder, without creating additional folder_

When installing for the first time, after cloning the repository, you will need to run 2 npm installs:

```
$ npm install
```

1. On the root project folder (this will install node-sass & one other npm modules).
2. Inside the react-dashboard folder (this will install react and its files in that folder).

# Workflow

## Woking on styling

For the styling we work on files inside /scss.
The scss files are in separate folders for admin page (react-app) and landing page. They are named: admin-main.scss and landing-main.scss. Main because these are going to be converted into css.
So either work on them directly or import partials, partials should be named with and underscore at the beginning as such:

```
_mypartial.scss
```

...and imported into -main.scss...

```
@import 'mypartial';
```

### To run the conversion (when in the root folder):

```
$ npm run sass;
```

_This will convert and watch both admin-main.scss and landing-main.scss, so it doesnt matter which one you are working on. The css files will be modified in react-dashboard/src/react-style.css & inside landing-page/landing-style.css_

Keep this running in one of the terminals.

Sass documentation, for cool stuff: https://sass-lang.com/guide

### General note on css specificity

<<<<<<< HEAD
Avoid using global selectors (p{}, body{} etc.). If you want to style all _p_ tags inside a _section_ that you are working on, give that _section_ an id and then select _p_ tags after it:
=======
Avoid using global selectors (p{}, body{} etc.). If you want to style all <p> tags inside a <section> that you are working on, give that <section> an id and then select <p> tags after it:
>>>>>>> elahebranch

```
#mysection p{}
```

## Launching dev server

The reasoning behind two npm installs is that when working on react app you will use the built-in create-react-app funtion to launch dev server, and when working with landing page you will use parcel to run dev server. This could be avoided if we eject from create-react-app, but, as far as I know, then we will loose some of the functionality, I am not very familiar with this.

For react dashboard, start the server:

```
$ npm start
```

When working with the landing page, start the server:
_when inside the landing-page folder_

```
$ parcel index.html
```

Keep this running in one of the terminals.

## Git

Use _git pull_ constantly when working on master.

Working on a new feature we branch out by:

```
$ git branch mybranchname
```

...and enter that branch...

```
$ git checkout mybranchname
```

To publish and track your new branch remotely:

```
$ git push -u origin mybranchname
```

Add or ask to add anything else that you find relevant, fix spelling errors or clarify stuff.
