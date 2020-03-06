# Numbery or NaNy: development strategy

Building this site one step at a time

## 0. Setup

> * What files do you need to create? 
- Need to create all separate files like `index.html`, `style.css` than `log.js`, `init.js` `handlers` with `save-input.js, remove-input.js & reset.js` also for each handler need `listeners` for `save-input.js & remove-input.js & reset.js`
> * What are you putting in each file? 
- In `index.html` I build a skeleton of my app with inputs and buttons and connect with my `script` files.
- In `style.css` will place my app to the center.
- In `handlers` i will put `save-input.js`, `remove-input.js` & `reset.js`
- In `listeners` will put `save-input.js`, `remove-input.js` & `reset.js`  

## 1. Data & Log

> * Which files of code do you need to create/change?
- `data` is already complete with `entries.js` file.
> * What are you changing in each file?
- I will define the log in program steps.

## 2. Init

> * Which files of code do you need to change? 
- `init.js` is already created by me in first step.
> * What are you changing in them? 
- I will define that will user see ones window is loaded.

## 3. User Story: As a user I want to have an app that will sort numbery and nany characters.

> * Which user story makes sense to code first?
- Create separation of numery amd nany characters on save button
> * Which files of code do you need to change?
- `handlers` and `listeners`, `save-input.js`
> * What are you changing in them?
- In `handlers`-`save-input.js` will define that the input should be separated on click. 
- In `listeners`-`save-input.js` will trigger the handlers data on click. 

## 4. User Story: As a user I want to be able to remove what i just saved.

> * Which user story makes sense to code first?
- Remove everything that was saved
> * Which files of code do you need to change?
- `handlers` and `listeners` - `remove-input.js` will have to define that everything that was saved will have to be removed. 
> * What are you changing in them?
- In `handlers`-`remove-input.js` will define that the input should be deleted on click. 
- In `listeners`-`remove-input.js` will trigger the handlers data on click. 

## 5. User Story: As a user I want to be able to reset everything.

> * Which user story makes sense to code first?
- Reset button should reset everything to it's primary stage.
> * Which files of code do you need to change?
- Have to change `handlers` and `listeners`, `reset.js`
> * What are you changing in them?
- In `handlers`-`reset.js` will define that the input should be on click. 
- In `listeners`-`reset.js` will trigger the handlers data on click. 
