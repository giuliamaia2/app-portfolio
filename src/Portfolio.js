import React from 'react'
import ButtonTeams from './button'
import PortfolioRows from './rows'

import { withStyles } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PortfolioService from './service/portfolioService';

const styles = (theme) => ({
    container: {
        background: '#FFFAF0',
    },

    tableContainer: {
        marginTop: '20px',
    }

});


class Portfolio extends React.Component {

    constructor(){
        super();
        this.service = new PortfolioService()
    }

    state = {
        teams: [],
        portfolio: null
    }

    componentDidMount() {
        this.service.getTimes()
            .then(response => {
                this.setState({ teams: response.data })
            }).catch(error => {
                console.log(error)
            })

    }

    handlePortfolio = (id) => {
        this.service.getTimePortfolio(id)
            .then(response => {
                this.setState({ portfolio: response.data.projetos })
                console.log(this.state.portfolio)
            }).catch(error => {
                console.log(error)
            })
    };

    render() {

        const { classes } = this.props;

        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <ButtonTeams onClick={this.handlePortfolio.bind(this)} teams={this.state.teams} />

                <Grid>
                    <TableContainer className={classes.tableContainer} component={Paper}>
                        <Table className={classes.container} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell> Project </TableCell>
                                    <TableCell> Status </TableCell>
                                    <TableCell align="right"> Creation Date </TableCell>
                                    <TableCell align="right"> Deadline </TableCell>
                                    <TableCell> Task Progress</TableCell>
                                </TableRow>
                            </TableHead>
                            {
                                this.state.portfolio == null ?
                                    (
                                        <></>
                                    ) : (
                                        <PortfolioRows portfolio={this.state.portfolio} />
                                    )
                            }

                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>

        )
    }


}

export default withStyles(styles)(Portfolio)
