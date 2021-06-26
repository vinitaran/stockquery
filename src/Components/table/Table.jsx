import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import "./Table.scss";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#1c2237",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 800,
	},
});

export default function CustomizedTables({ row, head }) {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>{head.name}</StyledTableCell>
						<StyledTableCell align="right">{head.col1}</StyledTableCell>
						<StyledTableCell align="right">{head.col2}</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{row?.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="right">{row.nifty}</StyledTableCell>
							<StyledTableCell align="right">{row.banknifty}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
