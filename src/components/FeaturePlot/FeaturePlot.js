import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Plot from 'react-plotly.js';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Menu,
  MenuItem
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { FEATURE } from './feature.js'

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-start'
  }
}));

const FeaturePlot = props => {
  const { className, exp, feature, response, responseLabel, ...rest } = props;
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title={responseLabel !== undefined ? `Expression of ${feature} vs. ${responseLabel}` : 'Select point from volcano plot to begin...'}
      />
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Visualize the expression of the selected feature from the volcano plot.
        <Button
            href="https://amritsingh.ca/omics-central-learn/eda.html#principal-component-analysis"
            target="_blank">
             <HelpIcon/>
         </Button>
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Plot
            data={ FEATURE(exp, response, feature).data }
            useResizeHandler
            style={{ width: '100%', height: '100%' }}
            layout={ FEATURE(exp, response, feature).layout }
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
      </CardActions>
    </Card>
  );
};

FeaturePlot.propTypes = {
  className: PropTypes.string
};

export default FeaturePlot;