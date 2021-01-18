import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ButtonTeams(props) {
    const { teams } = props;
    const classes = useStyles();

    const buttons = teams.map(team => {
        return (
            <Button onClick={() => props.onClick(team.id)} id={team.id}> {team.name} </Button>
        )
    })

    return (
        <div className={classes.root}>
            <ButtonGroup size="small" variant="contained" color="primary" aria-label="contained primary button group">
                {buttons}
            </ButtonGroup>
        </div>
    )
}
