### Camelcase Redux training
[![N|Redux](public/library_tutorial_mockup.png)](ReTube)


1 - :heavy_check_mark: Create a base react app, with latest 'redux' and 'react-redux' libraries installed.

2 - :heavy_check_mark: Create two reducers, one for list of books, and the other for the selected book.

3 - :heavy_check_mark: Combine the two reducers via 'combineReducers' method.

4 - :heavy_check_mark: Create store inside index.js using return from 'combineReducers', and inject it inside react components via 'Provider' component.

5 - :heavy_check_mark: Create book list component, with dummy book list array to display.

6 - :heavy_check_mark:Create book list item component.

7 - :heavy_check_mark: doneCreate book detail component, with dummy selected book to display.

8 - :heavy_check_mark: Create app component that contains all the created components, use it inside index.js .

9 - Replace the dummy book list array by the one coming from Redux state by connecting the component to Redux.

10 - Replace the dummy selected book by the one coming from Redux state by connecting the component to Redux.

11 - Create an action creator to return action responsible for selecting book.

12 - As book list component is already connected to Redux, Add this action, to be able to trigger it.

13 - Update selected book reducer to check for that action type, and updated selected book based on sent data.