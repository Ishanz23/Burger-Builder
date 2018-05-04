import React, {Fragment} from 'react';
import classes from './layout.css';
const layout = (props) => (
    <Fragment>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
)

export default layout;