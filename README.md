# Stevens Travel

Welcome to the site for the Stevens Travel company. This site is the basis for a travel company, designed for its users to discover new places to travel to.

With the ultimate goal being for the site to link onto a site for customers to then buy a holiday from.
 
## UX

The deisgn of this website was designed to be relatively simple, so that the users could easily navigate the site and access the information they need.

To that end the site is designed in a linear manner, with each consecutive section of the site first giving an overview of the site. Then it gives a few examples of destinations for the user to think about. Finally the site leads to a map that the user can use to discover hotels, restaurants and other details about the locations.

## User Stories

### Customer

When entering the site the first piece of information that the user comes to is an explanation of what the site does and the information available to them.

Then the user can either continue onto the examples of potential holiday destinations, or they can skip straight to the map using the links provided.

The final part is that the user can then follow the link a future website that sells them the holiday, automatically going onto the page for the city they most recently searched for.

## Features

The main two features of the page are the information section and then the map section.

#### Information

The information section of the page is broken into two parts, with two examples of city or beach locations. This section also contains a short description detailing some key points about the destinations.

There is also the current weather for the locations listed here. This weather data is collected using the OpenWeatherMap API and then displayed as a table on the page. This allows the user to make an informed choice about future holidays.

#### Map

The map is there for the users to be able to search any city/location in the world for hotels, restaurants and tourist attractions. The results of this search are then listed in a table to the side, or below on mobile, of the map.

There are then markers on the map, which when clicked give the phone number, Google rating and a link to their website for the result.

#### Mockup

The following mockup was used before development to get an idea of the general structure of the page.

#### Future Features

The main feature that would need to be added to this are further pages hosting the companies store front, for the user to spend money with the company.

The other thing to add would be the current time along with the current weather.

## Technologies

* Bootstrap 4 was used to make the structure of the page. This also helps with the responsiveness of the design.
* JavaScript was used to access the Google Maps API and the OpenWeather API and then display the information on the screen.
* JQuery was necessary to make some of the JavaScript work.

## Testing

The main part of this that required testing was the search function with the map. 

This was done using manual testing by using different cities, in different locations to make sure that the results were correct.

HTML code was validated using https://validator.w3.org/

CSS code was validated using https://jigsaw.w3.org/css-validator/

## Depoloyment

This site is hosted on GitHub and deployed directly from the master branch. Any commit updates or new releases will be deployed to that master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://github.com/NickStevens722/Milestone-2 into your terminal. To unlink the site from the GitHub repository, type git remote rm origin into the terminal.

The site is hosted on GitHub and can be run from there or locally by pasting the following link directly into your browser. https://nickstevens722.github.io/Milestone-2/

To view the source code please click on the following GitHub address https://github.com/NickStevens722/Milestone-2

Please Note that this site is currently for educational purposes only

