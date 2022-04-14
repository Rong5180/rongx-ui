import React from 'react';
import { Link } from 'rongx-ui';

export default () => (
  <div>
    <Link href="http://rong5180.top/" status="error">
      error link
    </Link>
    <br />
    <Link href="http://rong5180.top/" status="success">
      success link
    </Link>
    <br />
    <Link href="http://rong5180.top/" status="warning">
      success link
    </Link>
  </div>
);
