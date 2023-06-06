# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Age calculator app solution](#frontend-mentor---age-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](screenshot/desktopPreview.png)
![](screenshot/mobilePreview.png)

### Links

- Solution URL: [Solution](https://github.com/khophisnow/Age-Calculator-App.git)
- Live Site URL: [live site](https://khophisnow.github.io/Age-Calculator-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flex-box
- CSS Grid
- font Awesome

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="grid-container">
  <div class="item1"><label for="Day" id="label1">Day</label></div>
  <div class="item1"><label for="Month" id="label2">Month</label></div>
  <div class="item1"><label for="Year" id="label3">Year</label></div>
  <div class="item2"><input type="number" placeholder="DD" id="inputDay"></div>
  <div class="item2"><input type="number" placeholder="MM" id="inputMonth"></div>
  <div class="item2"><input type="number" placeholder="YYYY" id="inputYear"></div>
  <div class="item3"><p id="inputDayErr"></p></div>
  <div class="item3"><p id="inputMonthErr"></p></div>
  <div class="item3"><p id="inputYearErr"></p></div>
</div>
```css
.grid-container{
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    padding: 10px;
}
```

## Author

- Frontend Mentor - [@khophisnow](https://www.frontendmentor.io/profile/khophisnow)
- Twitter - [@khophi_snow](https://www.twitter.com/khophi_snow)
