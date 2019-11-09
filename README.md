# Feed Reader Testing with Jasmine

>This is the 5th project for the Udacity [Front-End Web Dev Nanodegree](https://udacity.com/course/front-end-web-developer-nanodegree--nd001/ "Front-End Web Developer Nanodegree").

### How to load project:

Copy/clone repository from Github using Git:
```sh
$ git clone git@github.com:nyafologus/frontend-nanodegree-feedreader.git
```
Open ```index.html``` in your browser. 

Alternatively, you can download it from [here](https://github.com/nyafologus/frontend-nanodegree-feedreader/archive/master.zip "Download ZIP"), or check it out live [here](https://nyafologus.github.io/feedreader/index.html "♥ Jasmine Test ♥")!


# Project Overview

This project is about a web-based application that reads RSS feeds. According to the hypothetical scenario that I was provided with, the original developer of this application clearly saw the value in testing, as they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company, thus the application was left with an incomplete test suite.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether we work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What did I learn?

I leared how to use Jasmine to write a number of tests against a pre-existing application. These test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How does this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give us the ability to quickly analyze whether new code breaks an existing feature within the codebase, without having to manually test all of the functionality.


# How did I complete this project?

Reviewed the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Took the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Reviewed the functionality of the application within my browser.
4. Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and reviewed the [Jasmine documentation](http://jasmine.github.io).
6. Edited the `allFeeds` variable in **./js/app.js** to make the provided test fail and learned how Jasmine visualizes this failure in the application.
7. Returned the `allFeeds` variable to a passing state.
8. Wrote a test that loops through each feed in the `allFeeds` object and ensured it has a URL defined and that the URL is not empty.
9. Wrote a test that loops through each feed in the `allFeeds` object and ensured it has a name defined and that the name is not empty.
10. Wrote a new test suite named `"The menu"`.
11. Wrote a test to ensure the menu element is hidden by default. Analyzed the HTML and the CSS to determine how the hiding/showing of the menu element is performed.
12. Wrote a test to ensure the menu changes visibility when the menu icon is clicked. This test had two expectations: the menu should display when clicked and it should hide when clicked again.
13. Wrote a test suite named `"Initial Entries"`.
14. Wrote a test to ensure that on completion of calling the `loadFeed` function, there is at least a single `.entry` element within the `.feed` container.
15. Wrote a test suite named `"New Feed Selection"`.
16. Wrote a test to ensure that whenever a new feed is loaded by the `loadFeed` function the content actually changes.
17. Learned that no test should be dependent on the results of another.
18. Leveraged the usage of callbacks to ensure that feeds are loaded before they are tested.
19. Implemented error handling for undefined variables and out-of-bound array access.
20. On completion, all of the tests should pass. 
21. Wrote the README file detailing all steps required to successfully run the application.