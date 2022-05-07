# Overview

The purpose of this project was to further my understanding of Angular, and learn more about typescript. I hope to recieve an internship as an angular developer in the future, and this was a stepping stone to preparing for that.

This app has both a calculator, and a tipping calculator. To test this app, open up the folder within the terminal, type "ng serve". Be sure the be in the same folder as all of the code. Then on a browser, navigate to "http://localhost:4200/".

The purpose of this software is to provide a simple calculator that only does addition, subtraction, division, and multiplication. The tipping calculator allows you to type the amount the meal was, and the percentage to tip.

[Calculator App Demo Video](https://youtu.be/N8RpPp3Wjuw)

# Web Pages

The first page I created was the home page, which just has the logo, and navigation buttons. The second page created is the "Calculator" page, which has a simple calculator that allows the user to put two separate values in, choose the math operation, and then click the calculate button. The third page is the "Tipping Calculator" page that allows the user to input the meal price, select the percentage they would like to tip, and then calculate it.

The pages are dynamically created without having to navigate between different HTML pages. In other words, the page doesn't reload each time the navigation buttons are clicked. This is done by using routing to generate the different components based on which navigation is selected.

# Development Environment

I used VSCode and Google Chrome to develop this app.

Angular uses basic HTML, CSS, along with TypeScript to create web apps.

# Useful Websites

* [angular.io](https://angular.io/)
* [The complete Angular guide](https://www.udemy.com/course/the-complete-guide-to-angular-2/)

# Future Work

* Fix the tipping calculator so it shows exactly 2 decimal places.
* Add more styling
* Make the navigation change colors depending on what is selected
* Create a logo for the app
