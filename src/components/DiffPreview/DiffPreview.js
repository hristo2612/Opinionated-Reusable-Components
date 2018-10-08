import React from 'react';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import {UnControlled as CodeMirror} from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class DiffPreview extends React.Component {

  render() {
    const {code} = this.props;
    return (
      <div style={{border: 'solid 1px lightgray'}}>
        <CodeMirror
            value={code}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true
            }}
        />
      </div>
    );
  }
}

DiffPreview.propTypes = {
  /** Percent of progress completed */
  code: PropTypes.string,
};

DiffPreview.defaultProps = {
  code: 'No Bruce Here'
};

export default DiffPreview;