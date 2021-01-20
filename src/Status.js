import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
        padding: theme.spacing(0, 3)
    }
}));
export default function Status(props) {

    const classes = useStyles();


    const getDescription = () => {
        if (props.description == null) {
            return null;
        }
        return `${props.title} - ${props.description.substring(0, 20)}...`
    }

    const getStatus = () => {
        if (props.color === 'red') {
            return '';
        } if (props.color === 'green') {
            return 'On track';
        } if (props.color === 'yellow') {
            return 'At Risk';
        }
    }


    return (
        <div className={classes.root}>
            <Grid container wrap="nowrap" spacing={0}>
                <Grid item>
                    <div
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: `${props.color}`,
                            margin: "6px"
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <Typography variant="body1">{getStatus()}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">{getDescription()}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}