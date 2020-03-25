import React from 'react';
import CriteriaOptions from './CriteriaOptions';
import { makeStyles } from '@material-ui/core';
import ResponsiveTypography from "../MyComponents/ResponsiveTypography"

const useStyles = makeStyles(theme => ({
    question: {
        padding: 10
    },
}));

export default function Criteria(props) {
    const classes = useStyles();
    return (
    <React.Fragment >
        <ResponsiveTypography
            align={'left'}
            color="textPrimary"
            variant="h4"
            text={props.criteria.headLineQuestion} 
            className={classes.question}
        />

        <CriteriaOptions
            category={props.criteria.category}
            criteriaItems={props.criteria.options}
            handleCheckBoxChange={props.handleCheckBoxChange}
            selectedCriterias={props.selectedCriterias}
        />
    </React.Fragment>
    );
}
