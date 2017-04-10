# React Router Transition Animation

Some examples of working with react and react router to achieve animations between states. Based on requirements from a real application.

## Run examples

You can run the examples by running the following commands.

    > npm install
    > npm start

## Techniques

1. Use subroutes. See `src/containers/HotelDetails.js`  
   Here we render render a `<Route />` element to match a subroute within a route container.
2. Use the `children` prop. Again, see `src/containers/HotelDetails.js`  
   Here we mount components in both the route and the subroute but alter how they are rendered using props. This allows us to do some very natural CSS transitions while still maintaining the beneft of seperate routes for the user.

One of the more tricky things we needed to accomplish was to transform cards rendered on the index route into the header in the details page. We didn't want to keep these cards mounted and have it actually be the same component for a couple of reasons the main one being that we didn't want to confuse things by having all of the components from index mounted further down in the application. This meant that when the details route was mounted we have to fake it so that the header of that page appeared to be transformed from card that was clicked on. We achieve this by sending some meta data when we change location from the card. The elements in the receiving route use this meta data to render an initial state of the header (in the same place as the card was) and then morph it into the desired shape and size of the header.

3. Sending dimensions using location state. See `src/components/Card.js`.  
   Here we get the dimensions of the current element when it's clicked and add this information to the location state when we push the route that we want to go to.
4. Get dimensions from location.state. See `src/containers/HotelDetails`, `src/components/HotelHeader.js` and `src/components/HeaderBackgroundImage.js`.
   These are used to generate styles for a ghost state of the header background image before transforming it into it's final state. 

Finally, for changing a component based on scrolling:

5. Listen for scroll events. See `src/components/HotelHeader.js`
   Here we check to see if the window has been scrolled and if so we setState within the component. We use this state to render the component appropriately.

## Constraints

Need to support back to IE10 which precluded some other solutions.