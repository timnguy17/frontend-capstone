import React from 'react';
import Overview from './productOverview/Overview.jsx';
// eslint-disable-next-line import/no-named-as-default
import ReviewList from './ratingsAndReviews/ReviewList.jsx';
// eslint-disable-next-line react/function-component-definition
const App = () => (
  <>
    {/* <h1 className="title">Kids Next Door NExt</h1> */}
    <Overview />
    <ReviewList />
  </>

);

export default App;
