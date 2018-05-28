import React from 'react';
import ReactDOM from 'react-dom';
import DefaultUpload from './DefaultUpload';

class FileUpload extends React.Component {
    render() {
        return (
            <div className="example">
                <h2>
                    upload  files to google cloud storage
                </h2>
                <p>posting to the google cloud storage.</p>
                <DefaultUpload />
            </div>
        );
    }
}

ReactDOM.render(<FileUpload />, document.getElementById('app'));
