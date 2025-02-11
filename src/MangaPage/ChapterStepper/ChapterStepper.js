import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from "@material-ui/core/Stepper";
import StepButton from "@material-ui/core/StepButton";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import TaskChip from "../../Component/TaskChip/TaskChip";
import {Link} from "react-router-dom";
import UserChip from '../../Component/UserChip/UserChip';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    nominee: {
        marginBottom: 10
    },
    completed: {
        color: theme.palette.primary
    }
}));

export default function ChapterListItem(props) {
    const classes = useStyles();
    const {vertical, chapter, mid} = props;

    const tasks = chapter["tasks"];
    const cid = chapter["id"];

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel={!vertical} nonLinear activeStep={-1} orientation={vertical ? "vertical" : "horizontal"}>
                {tasks.map((label, index) => (
                    <Step key={label["name"]}>
                        <StepButton component={Link} to={"/manga/" + mid + "/" + cid + "/" + label["id"]}
                                    completed={label["status"] === 1}>
                            <StepLabel>
                                <TaskChip label={label}/>
                            </StepLabel>
                        </StepButton>
                        {label["accept_on"] !== 0 && (!vertical ? (
                            <StepLabel icon={null}>
                                <UserChip user={label["accept_by"]} size="small"/>
                            </StepLabel>
                        ):
                        <StepLabel icon={
                            <span style={{ display: 'inline-block', width: '24px', height: '24px' }}></span>}> 
                            <UserChip user={label["accept_by"]} size="small" style={{ marginTop: '5px' }}/>
                        </StepLabel>
                        )}
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}
