// An error page will be displayed if the user tries to navigate to an invalid page

import { Fragment, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(`404: Invalid route accessed → ${location.pathname}`);
  }, [location]);

  return (
    <Fragment>
      <Container>
        <h1>Not found</h1>
        <p>This is an error page</p>
      </Container>
    </Fragment>
  );
};

export default NotFound;
