/**
 * @license
 * Copyright Equivalent Design All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be found
 * in the LICENSE file at
 * https://github.com/equivalent-design/smart-svg-samples/License
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ReactSVG } from 'react-svg';

function Heading({sample}) {
  return (
    <h1>SmartSVG&#8482; {sample} Sample</h1>
  );
}

function App() {
  return (
    <main style={{backgroundColor: '#d3d3d3'}}>
      <Heading sample='React'/>
      <ReactSVG src='./smart.svg' />
    </main>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
