# Northcoders News Site

https://northcoders-news-site.netlify.com/

This is a little project created in React using an API I created earlier (https://github.com/waivey/be-nc-news).

It's a news-style App that lets you read and up/down vote articles and comments, and when signed-in (currently by selecting a pre-existing user) allows you to post new articles and comments, as well as delete articles and comments that your username has previously posted.

## Getting Started

It might help you play with this repo if you also have a bit of a look at the backend repo for this project. You can find that at (https://github.com/waivey/be-nc-news).

### Preqrequisites

To get this running, you'll need the following minimum versions software

```
Node v12.9.0
React v16.12.0
Reach Router v1.2.1
Axios v0.19.0
```

As long as your Node version is at the minimum, you can run

```
npm install
```

and that should make sure all your other dependecies are installed in order to run.

### Setup Instructions

Fork this repository to your own GitHub account by hitting the Fork button at the top of the page.

Then you can clone your fork to your local machine and move into its directory

```
git clone <your fork's URL>
cd northcoders-news
```

Once you've navigated inot the folder and installed all the dependencies, you can run

```
npm start
```

and this will run the app in development mode in your default browser at http://localhost:3000. As long as it's running in your console, the page will reload automatically when you've saved edits.
