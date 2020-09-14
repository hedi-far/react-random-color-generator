import React from 'react';
import './ColoredBox.css';
import Color from './Color';

export default function ColoredBox({ color }) {
  return (
    <div id="box">
      <Color />
    </div>
  );
}
