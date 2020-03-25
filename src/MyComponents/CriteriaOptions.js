import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { List, ListItem, ListItemAvatar, ListItemText, Divider } from '@material-ui/core';
import ResponsiveTypography from "../MyComponents/ResponsiveTypography"


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'block',
    }
}));

export default function CriteriaOptions(props) {
    const classes = useStyles();

    const handleCheckBoxChange = changeEvent => {
        props.handleCheckBoxChange(changeEvent);
    }

    function Requirements(item) {
        return <React.Fragment>
            {item.requirements === undefined ? <span></span> :
                item.requirements.map((req, index) => {
                    return (<ResponsiveTypography key={index} component="span" variant="body2" className={classes.inline} color="textSecondary" text={req.description} />);
                })}
        </React.Fragment>;
    }

    return (
        <List className={classes.root}>
            {
                props.criteriaItems.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <ListItem alignItems="center">
                                <ListItemAvatar>
                                    <Radio
                                        checked={props.selectedCriterias[props.category] === item.description}
                                        onChange={() => { handleCheckBoxChange({ selectedOption: item.description, points: item.points, category: props.category }) }}
                                        key={index}
                                        value={item.description}
                                        name="radio-button-demo"
                                        color="primary"
                                        inputProps={{ 'aria-label': 'A' }} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <ResponsiveTypography
                                                component="span"
                                                variant="h6"
                                                className={classes.inline}
                                                color="textSecondary"
                                                text={`${item.description} (${item.points} points)`}
                                            />
                                        </React.Fragment>}
                                    secondary={Requirements(item)}
                                    key={index}
                                />
                            </ListItem>
                            {
                                (index + 1) === props.criteriaItems.length ? <span></span> :
                                    <Divider variant="inset" component="li" />
                            }
                        </React.Fragment>
                    )
                })
            }
        </List>
    );
}