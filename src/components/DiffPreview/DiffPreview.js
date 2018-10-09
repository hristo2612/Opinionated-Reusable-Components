import React from 'react';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import './DiffPreview.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class DiffPreview extends React.Component {

  render() {
    const {code} = this.props;
    return (
      <div style={{border: 'solid 1px lightgray', fontSize: '16px'}}>
        <CodeMirror
            value={code}
            options={{
              mode: 'javascript',
              theme: 'darcula',
              readOnly: true
              // lineNumbers: true
            }}
            readOnly={true}
            editorDidMount={(editor) => {
              editor.addLineClass(1, null, 'remove_line');
              editor.addLineClass(2, null, 'add_line');
              editor.addLineClass(3, null, 'add_line');
              editor.addLineClass(4, null, 'add_line');
              editor.addLineClass(5, null, 'add_line');
              editor.addLineClass(6, null, 'add_line');
              editor.addLineClass(7, null, 'add_line');
              editor.addLineClass(8, null, 'add_line');
              editor.addLineClass(9, null, 'add_line');
            }}
        />
      </div>
    );
  }
}

DiffPreview.propTypes = {
  /** The code diff ( with +/- lines ) */
  code: PropTypes.string.isRequired,
};

DiffPreview.defaultProps = {
  code: 'No Bruce Here'
};

export default DiffPreview;