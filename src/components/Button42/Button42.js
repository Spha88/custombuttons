import React from 'react';
import classes from './Button42.module.scss';

export const Button42 = ({ label }) => {
    return <button className={classes.Button}>{label}</button>;
};
