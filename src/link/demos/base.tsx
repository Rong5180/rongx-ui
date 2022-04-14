import React from 'react';
import { Link } from 'rongx-ui';

export default () => (
  <div>
    <Link href="http://rong5180.top/">link</Link>
    <br />
    <Link href="http://rong5180.top/" disabled={true}>
      link
    </Link>
  </div>
);
