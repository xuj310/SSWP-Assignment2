// An error page will be displayed if the user tries to navigate to an invalid page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';

const NotFound = () => {
  return (
    <Fragment>
      <Container>
          <h1>Not found</h1>
          <p>This is an error page</p>
      </Container>
    </Fragment>
  )
}

export default NotFound