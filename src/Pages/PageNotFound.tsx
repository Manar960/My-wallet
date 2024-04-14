import React from 'react';
import { Link } from 'react-router-dom';
export const PageNotFound: React.FC = () => {
  return (
    <div className="background-content m-5 pb-5">
      <h1>Oops! We can&apos;t find the page you are looking for.</h1>
      <p>
        You tried to request a page that does not exist. If you believe this to be in error, let us
        know.
      </p>
      <p>Go to the <Link to='/'>Home Page</Link>.</p>
    </div>
  );
};
