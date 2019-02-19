import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'office-ui-fabric-react/lib/Button';

const MyPage = () => (<div><Button>I am a button.</Button></div>);

ReactDOM.render(<MyPage />, document.body.firstChild);
