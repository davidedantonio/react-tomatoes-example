import React from "react";
import { Grid, withStyles, Typography, Paper } from "@material-ui/core";
import DashboardTimer from "./../components/DashboardTimer";
import { TimerOff, Timer, AccessTime } from "@material-ui/icons";
import style from "./../components/DashboardTimerStyle";
import axios from "axios";
import TableDashboard from "./../components/TableDashboard";

class Dashboard extends React.Component {
    state = {
        tasks: []
    };

    componentDidMount () {
        this.loadTasks();
    }

    loadTasks = async () => {
        try {
            const response = await axios.get('https://reqres.in/api/unknown');
            this.setState({ tasks: response.data.data });
        } catch (e) {
            console.log(e);
        }
    }

    render () {
        const { classes } = this.props;
        const { tasks } = this.state;
        
        return (
            <React.Fragment>
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography className={classes.label}>
                            Daily Time
                        </Typography>
                    </Grid>
                </Grid>

                <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
                >
                    <Grid item xs={12} sm={4} md={2}>
                        <DashboardTimer 
                            icon={<TimerOff className={classes.icon} />}
                            timer={'12:33:33'}
                            label={'Time in Pause'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <DashboardTimer 
                            icon={<Timer className={classes.icon} />}
                            timer={'12:33:33'}
                            label={'Productive Time'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                    <DashboardTimer 
                        icon={<AccessTime className={classes.icon} />}
                        timer={'12:33:33'}
                        label={'Total Time'}
                    />
                </Grid>
                </Grid>
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography className={classes.label}>
                            Tasks
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <TableDashboard tasks={tasks} />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(style)(Dashboard);