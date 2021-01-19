import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from '@material-ui/core/TableBody';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';

export default function PortfolioRows(props) {
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState(null);
    const { portfolio } = props

    const clickStatus = (status) => {
        setOpen(true)
        setStatus(status)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiDialogContent);



    const rows = portfolio.map(projeto => {

        const marks = [
            {
                value: projeto.percentage,
                label: `${projeto.percentage}%`
            }];


        return (
            <TableRow scope="row" key={projeto.id}>
                <TableCell > {projeto.name} </TableCell>
                <TableCell >
                    <div style={{
                        width: 'auto',
                        heigth: 'auto',
                        cursor: 'pointer'
                    }}
                        onClick={e => clickStatus(projeto.status)}>
                        {projeto.statusTitle}
                    </div>
                </TableCell>
                <TableCell > {projeto.createdAt}</TableCell>
                <TableCell>
                    <Slider
                        value={projeto.percentage}
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        min={0}
                        max={100}
                        marks={marks}
                        disabled
                    />

                </TableCell>
            </TableRow>
        )

    })

    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Status
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {status == null ? (
                            "Status não possui detalhes"
                        ) : status}
                    </Typography>
                </DialogContent>
            </Dialog>

            <TableBody>
                {rows}
            </TableBody>

        </>
    )
}
