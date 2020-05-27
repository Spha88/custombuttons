import React from 'react';
import classes from './App.module.scss';
import { Button2 } from './components/Button2/Button2';
import { Button3 } from './components/Button3/Button3';
import { Button4 } from './components/Button4/Button4';
import { Button5 } from './components/Button5/Button5';
import { Button6 } from './components/Button6/Button6';
import { Button7 } from './components/Button7/Button7';
import { Button20 } from './components/Button20/Button20';
import { Button21 } from './components/Button21/Button21';
import { Button22 } from './components/Button22/Button22';
import { Button30 } from './components/Button30/Button30';
import { Button31 } from './components/Button31/Button31';
import { Button32 } from './components/Button32/Button32';

function App() {
    return (
        <div className={classes.App}>
            <header>
                <h1>Button collection</h1>
            </header>
            <div>
                <Button2 label='View' />
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
            <div>
                <Button30 label='Button 30' />
                <Button31 label='Button 31' />
                <Button32 label='Button 32' />
            </div>
        </div>
    );
}

export default App;
