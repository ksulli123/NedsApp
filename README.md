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
GreyHound, Harness and Horse arrays then sorted by date time ascending. Based on the currently selected category a
differing view is rendered. Each race component has its own unique time that once is below 60 seconds, disappears.

# Remarks
Although it was aimed to used styled-components, installing styled-components for a react native app does not
seem to work properly.

https://github.com/styled-components/styled-components/issues/1974
https://github.com/styled-components/styled-components/issues/2674

The current version of this application does not load more races once the 10 loaded races disappear.

Although the redux and unit testing aspect of the technical task is feasible, it was not met within the expected timeframe.

Although I haven't used React-Native for a year and had to refamiliarize myself, I enjoyed this task very much. Cheers!
