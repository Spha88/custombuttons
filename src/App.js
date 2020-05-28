import React from 'react';
import classes from './App.module.scss';
import { Button1 } from './components/Button1/Button1';
import { Button2 } from './components/Button2/Button2';
import { Button3 } from './components/Button3/Button3';
import { Button4 } from './components/Button4/Button4';
import { Button5 } from './components/Button5/Button5';
import { Button6 } from './components/Button6/Button6';
import { Button7 } from './components/Button7/Button7';
import { Button20 } from './components/Button20/Button20';
import { Button23 } from './components/Button23/Button23';
import { Button21 } from './components/Button21/Button21';
import { Button22 } from './components/Button22/Button22';
import { Button30 } from './components/Button30/Button30';
import { Button31 } from './components/Button31/Button31';
import { Button32 } from './components/Button32/Button32';
import { Button40 } from './components/Button40/Button40';
import { Button41 } from './components/Button41/Button41';
import { Button42 } from './components/Button42/Button42';
import { Button50 } from './components/Button50/Button50';
import { Button51 } from './components/Button51/Button51';
import { Button52 } from './components/Button52/Button52';

function App() {
    return (
        <div className={classes.App}>
            <header>
                <h1>Button collection</h1>
            </header>
            <div>
                <Button1 label='Button 1' />
                <Button2 label='Button 2' />
                <Button3 label='Button 3' />
                <Button4 label='Button 4' />
                <Button5 label='Button 5' />
                <Button6 label='Button 6' />
                <Button7 label='Button 7' />
            </div>
            <div>
                <Button20 label='Button 20' />
                <Button23 label='Button 23' />
                <Button21 label='Button 21' />
                <Button22 label='Button 22' />
            </div>
            <div>
                <Button30 label='Button 30' />
                <Button31 label='Button 31' />
                <Button32 label='Button 32' />
            </div>
            <div>
                <Button40 label='Button 40' />
                <Button41 label='Button 41' />
                <Button42 label='Button 42' />
            </div>
            <div>
                <Button50 label='Button 50' />
                <Button51 label='Button 51' />
                <Button52 label='Button 52' />
            </div>
        </div>
    );
}

export default App;
