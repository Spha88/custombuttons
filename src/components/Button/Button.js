import React from 'react';
import classes from './Button.module.scss';

export const Button1 = ({ label }) => {
    return <button className={classes.Button}>{label}</button>;
};
