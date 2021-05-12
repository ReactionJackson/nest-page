# Project Notes & Thoughts

I'd like to give a quick breakdown of things that I've not completed, changed intentionally, or improved.

## Smaller Changes

These alterations are things that I would pass by the designer before implementing in a delivery setting. I point them out to avoid confusion about a lack of accuracy:

- Slightly different ease in motion in the Hero
- Typography in the content blocks is altered as I didn't agree with the spacing of the original
- Play button / close button transitions in video section have been updated
- Staggered text animation has been changed

## Motion Changes

These  are more drastic improvements to certain sections of the page that again would need to be discussed with the designer:

- Redesigned page toggle and animation in the nav bar, for clarity
- Added reveal animations to the square images
- Reworked the progress pips in the product colours section for clarity, as well as fixing autoplay and interruptable behaviour
- Updates to Farsight / lights on section
  - The section locks as you arrive
  - A black mask fades away and the image slowly zooms in, to simulate someone walking into the room and turning the lights on
  - The display on the Nest then turns on, showing the actual current time
  - Note: if I had access to assets, I would overlay the Nest onto the background so the clock positioning would be exact at all screen heights. However given the nature of this test / assets, it may appear out of place.

## Not Included

These are items that I've left out in the interest of time:

- Tech Specs and Compare views (they have viewable stubs instead)
- Mega Menu and Mobile Menu
- Footer

## General Notes and Thoughts

I've built this project from scratch, with zero boilerplate from other professional / personal projects. I like to do this as it better shows what my current approach is instead of piggybacking off of past or other people's work.

Responsive for this project has been done in a simple manner, using a `media()` util function. For responsive, I believe in trying to make each component (visually speaking) seamlessly scale down, using whichever arbitrary breakpoints that are necessary for the given component. I know the norm is to have a number of set breakpoints, but I've never agreed with how the page does major jumps using this approach. On other projects, I'd likely choose a more in-depth approach to dealing with responsive, but this page was relatively simple.

Some packages have been used to speed up the process, mostly to save time. None of these packages are out-of-the-box solutions however, so I still had to build out the functionality using these packages.

I've not used CSS Grid at any point in this project as I couldn't find any real areas where I'd find it useful to use, however I am comfortable with grid. Previously I have actually built out a full React-based grid system using CSS Grid and Styled Components, the API for which I'm still improving to this day.

I didn't find a usage for Context within this project. I did drill down a method to get the "pagination" working, but it was a one off and fairly innocent. I am comfortable with exposing state around the app, and my first go-to is almost always React's own useContext approach.

I've not used React Router on this test as it would have been overkill to link to stub pages, but again I have plenty of experience using this in live projects.

Finally, bear in mind that I've done this test on evenings after full days of work, hahaa! So with that in mind, if there are any curious looking areas in my code / composition, I blame that ;)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
