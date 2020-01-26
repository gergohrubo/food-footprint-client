<h1 align="center">
  <b>:stew:</b><br>
  <b>Food-diary</b><br>
</h1>

<h4 align="center">Analyze your meals and keep track of your daily nutrition!</h4>

![uploading-image](https://github.com/gergohrubo/food-footprint-client/blob/master/gifs/overview_uploadimg.gif?raw=true)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ec2b2103-f2f7-4606-92e8-76cd3a3b05a3/deploy-status)](https://app.netlify.com/sites/food-diary-gh/deploys)

### This is the frontend part of my Food-diary project. You can view the [backend](https://github.com/gergohrubo/food-footprint-server), or checkout the [deployed version](https://food-app-gh.netlify.com/)

## Table of contents

* [What is this project about](#what-is-this-project-about)
* [Technologies used](#technologies-used)
* [Features breakdown](#features-breakdown)
* [My git workflow](#my-git-workflow)
* [How to use](#how-to-use)

## What is this project about

#### The purpose of the project is to

* Provide a user-friendly frontend for an extensive backend app that is accessible both via web and mobile
* Show a well structured React app with React-Router and division into presentational and container components
* Incorporate Redux for state management and Redux-thunks for making asynchronous calls to the backend
* Practice file (image) handling on the frontend with uploading and downloading to the backend
* To use Material UI with custom-defined theme and styled components
* To showcase disciplined git usage

## Technologies used

* [React](https://github.com/gergohrubo/food-footprint-client/tree/master/src/components)
* [React-Router](https://github.com/gergohrubo/food-footprint-client/blob/master/src/index.js)
* [Redux](https://github.com/gergohrubo/food-footprint-client/tree/master/src/reducers)
* [Redux-thunk](https://github.com/gergohrubo/food-footprint-client/blob/master/src/actions.js)

## Features breakdown

#### For detailed description of how the following features were implemented see the pull requests:

* [Image uploader component](https://github.com/gergohrubo/food-footprint-client/pull/2)
* [Listing the ingredients on the picture](https://github.com/gergohrubo/food-footprint-client/pull/3)
* [Listing all the nutrients that you received from said ingredients](https://github.com/gergohrubo/food-footprint-client/pull/10)
* [Adding diary page](https://github.com/gergohrubo/food-footprint-client/pull/12)

## My git workflow

#### In this project my aim was to

* Use clear branch names with feat/ fix/ and bug/ prefixes
* Write prompt but descriptive commit messages
* Keep the separation of concerns between branches
* Write extensive summaries for pull requests
* Use development branch for testing while master branch is on continuous deployment

#### Here is a branching model for this project:

```
master (auto deploys) ______________________
                       \               /
development             \_____________/- pull request
                         \           /
feat/some-feature         \_commits_/- pull request
```

## How to use

The project was bootstrapped using create-react-app cli. To start clone the github repository, install dependencies via npm and run with

```
npm start
```

Which makes it accessible to you on localhost port 3000. The backend is linked to my deployed backend on Heroku, to change that, go to ./src/actions.js and replace the baseUrl variable accordingly.

From the landing page you can start registering a meal that you had that day by clicking "Upload a new meal"

![uploading-image](https://github.com/gergohrubo/food-footprint-client/blob/master/gifs/overview_uploadimg.gif?raw=true)

If you are on your phone you can just take a picture of your meal on the spot!

Next up is deciding whether the ingredients guessed by the app are correct or not. You can add or remove ingredients, then submit them. After submission the app will again guess what the name of the recipe was. You can either take any of the guesses or enter the name on your own.

![select-ingredient](https://github.com/gergohrubo/food-footprint-client/blob/master/gifs/overview_select_ingredient_recipe.gif?raw=true)

After submitting the ingredients with the recipe name you will receive the total nutrients your meal provided. The length of the bars below each nutrient indicates the percentage of the daily recommended value.

![nutrients](https://github.com/gergohrubo/food-footprint-client/blob/master/gifs/overview_nutrients.gif?raw=true)

When finished, from the landing page you can navigate to your diary page which is an overview of your total daily intake, broken down to all the meals you had (with picture, recipe name and ingredients) and the sum of the total nutrients from every meal you had that day! With the date picker you can browse your intakes in past days, and by clicking on "What should I eat?" you receive a list of suggested recipes that brings your total daily input to 100% from the most important nutrients!

![diary-page](https://github.com/gergohrubo/food-footprint-client/blob/master/gifs/overview_diary_page.gif?raw=true)
