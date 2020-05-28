import React from 'react';
import classes from './Button1.module.scss';

export const Button1 = ({ label }) => (
    <button className={classes.Button}>{label}</button>
);
