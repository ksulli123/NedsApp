# NedsApp

This React-Native application is a technical task outlined by Neds.

This application pulls from the following API:

https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10

# Components

The main components of this application are:
* App.js (Main component that consumes API then maps the array into multiple race components)
* Race.js (Component that renders meeting_name, race number and cooldown timer component below.)
* Timer.js (Component that takes as props the time remaining and displays as x min y seconds)

# Approach taken:
This application consumes the aforementioned API and sorts all the races into one object array. The array is then sorted into
GreyHound, Harness and Horse arrays then sorted by time. Based on the currently selected category a
differing view is rendered. Each race component has its own unique time that once is below 60 seconds, disappears.

# How to get working:

git clone the repo. 
1. npm install
2. npm start
3. Wait for metro bundler then select tunnel or preferred connection approach.
4. Load/Build project into expo app. (I tested on iPhone XR)

# Remarks
Although it was aimed to used styled-components, installing styled-components for a react native app does not
seem to work properly.

https://github.com/styled-components/styled-components/issues/1974
https://github.com/styled-components/styled-components/issues/2674

# Incompletions / Things that can be improved:
* Perhaps based on the method of storing the each array and then subsequently rendering, when the filtering (although tested thoroughly and should be working) function onDelete is called instead of correctly removing the race as the correct index, similar to the LIFO pop is done. The function is then recursively called for some reason until the correct item at the index is deleted, effectively removing all the race items. Currently the races are displayed as time descending where the LIFO pop filter approach does delete the correct index.

* Putting an emphasis on functionality, the UI can be improved.

* The current version of this application does not load more races once the 10 loaded races disappear.


# Unit Testing

The unit testing was completed using jest. The following unit tests were added:
* Seeing if fetching against the given API would retrieve anything. If the returned json object was null then the test fails.
* Seeing if the timer worked then called a function that would filter the given array. The test would fail if the returned array was not shorter by 1 of length.
Testing can be completed by typing in npm test.

# Redux
Although the layer of redux logic was implemented to add the currently selected race catogory (See previous commit) from and to the redux store, it would not work with the app. 


Although I haven't used React-Native for a year and had to refamiliarize myself, I enjoyed this task very much. Cheers!
