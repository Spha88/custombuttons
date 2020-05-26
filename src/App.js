import React from 'react';
import classes from './App.module.scss';
import { Button1 } from './components/Button/Button';
import { Button3 } from './components/Button3/Button3';
import { Button4 } from './components/Button4/Button4';
import { Button5 } from './components/Button5/Button5';
import { Button6 } from './components/Button6/Button6';
import { Button7 } from './components/Button7/Button7';
import { Button20 } from './components/Button20/Button20';
import { Button21 } from './components/Button21/Button21';
import { Button22 } from './components/Button22/Button22';

function App() {
    return (
        <div className={classes.App}>
            <header>
                <h1>Button collection</h1>
            </header>
            <div>
                <Button1 label='View' />
            </div>

            <div>
                <Button3 label='View' />
                <Button4 label='View' />
                <Button5 label='View' />
                <Button6 label='View' />
                <Button7 label='View' />
            </div>
            <div>
                <Button20 label='View' />
                <Button21 label='View' />
                <Button22 label='View' />
            </div>
        </div>
    );
}

export default App;
