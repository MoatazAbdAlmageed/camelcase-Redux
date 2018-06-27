### Camelcase Redux training
1 - Create a base react app, with latest 'redux' and 'react-redux' libraries installed.

2 - Create two reducers, one for list of books, and the other for the selected book.

3 - Combine the two reducers via 'combineReducers' method.

4 - Create store inside index.js using return from 'combineReducers', and inject it inside react components via 'Provider' component.

5 - Create book list component, with dummy book list array to display.

6 - Create book list item component.

7 - Create book detail component, with dummy selected book to display.

8 - Create app component that contains all the created components, use it inside index.js .

9 - Replace the dummy book list array by the one coming from Redux state by connecting the component to Redux.

10 - Replace the dummy selected book by the one coming from Redux state by connecting the component to Redux.

11 - Create an action creator to return action responsible for selecting book.

12 - As book list component is already connected to Redux, Add this action, to be able to trigger it.

13 - Update selected book reducer to check for that action type, and updated selected book based on sent data.