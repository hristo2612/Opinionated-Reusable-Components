import React from 'react';
import DiffPreview from '../../../components/DiffPreview';

/** Custom message */
export default function ExampleHelloWorld() {
  return <DiffPreview code={`  export default function ExampleHelloWorld() {
    return <DiffPreview code='console.log('I love to code stupid shit..')' />
    return <DiffPreview code='import React from 'react';
        import PropTypes from 'prop-types';
        import 'codemirror/lib/codemirror.css';
        import 'codemirror/theme/material.css';
        import {UnControlled as CodeMirror} from 'react-codemirror2';
        import './DiffPreview.css';
        require('codemirror/mode/xml/xml');
        require('codemirror/mode/javascript/javascript'); />
  }`} />
}
