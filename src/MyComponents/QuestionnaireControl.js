import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import TabCategories from './TabCategories';
import Score from './Score';

const useStyles = makeStyles(theme => ({
    mainBox: {
      flexGrow: 1,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    tab:{
        marginTop: '10px'
    },
  }));

export default function QuestionnaireControl(props) {
    const classes = useStyles();
    return (
        <Box className={classes.mainBox} height={100}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Score 
                        total={props.total} 
                        categories={props.categories} />
                    <br></br>
                    <TabCategories
                        questionnaire={props.questionnaire}
                        handleCheckBoxChange={props.handleCheckBoxChange}
                        selectedCriterias={props.selectedCriterias}
                    />
                </Grid>
            </Grid>
        </Box>)
}