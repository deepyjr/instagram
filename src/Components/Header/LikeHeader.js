import React from 'react';
import './LikeHeader.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const LikeHeader = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p className="Like-Header-Content">The content of the Popover.</p>  
        <p className="Like-Header-Hour">22H</p>
      </div>
    );
}

export default LikeHeader;