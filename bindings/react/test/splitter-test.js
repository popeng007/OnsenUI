 /* global describe it assert */

import React from 'react';
import ReactDOM from 'react-dom';
import {Splitter} from '../dist/react-onsenui.js';
import TestUtils from 'react-dom/test-utils';

import rendersToComponent from './testUtil.js';

describe('Splitter', function() {
  rendersToComponent(
    <Splitter />,
    'ons-splitter'
  );
});
