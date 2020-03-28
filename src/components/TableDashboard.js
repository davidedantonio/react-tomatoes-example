import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from "@material-ui/core";

class TableDashboard extends React.Component {
    render () {
        const { tasks } = this.props;

        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Task name</TableCell>
                            <TableCell>Creation Date</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks && tasks.map(item => {
                            return (
                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.year}</TableCell>
                                    <TableCell>{item.color}</TableCell>
                                    <TableCell>{item.pantone_value}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default TableDashboard;