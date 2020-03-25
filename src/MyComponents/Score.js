import React from 'react';
import { makeStyles, Box, Divider,} from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ResponsiveTypography from '../MyComponents/ResponsiveTypography';
import CategoriesScore from './CategoriesScore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    secondBox: {
        marginLeft: '10px'
    }
}));

export default function Score(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header" >
                    <Box>
                        <ResponsiveTypography
                            component="span"
                            variant="h6"
                            color="primary"
                            text={"Your Score"}
                            
                        />
                        <ResponsiveTypography 
                            variant="h4"
                            text={props.total} />
                    </Box>
                    <Divider orientation="vertical" />
                    <Box className={classes.secondBox}>
                        <ResponsiveTypography
                            component="span"
                            variant="h6"
                            color="primary"
                            text={"Min Score"}
                            
                        />
                        <ResponsiveTypography 
                            variant="h4"
                            text={"65"} />
                    </Box>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <CategoriesScore categories={props.categories} />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
