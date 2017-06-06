import React from 'react';
import ReactJsonSchema from 'react-json-schema';
import Main from './Main';
import PieChart from './PieChart';
import Table from './Table';

export default class Sample extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const schema = {
      "component": "Main",
      'children': [
        {
          'component': 'PieChart',
          'title': 'This Pie Chart Component'
        },
        {
          'component': 'Table',
          'title': 'This Table component'
        }
      ]
    };

    const componentMap = { Main, PieChart, Table };
    const sampleToDemo = new ReactJsonSchema();
    sampleToDemo.setComponentMap(componentMap);


    return (
      <div>
        {sampleToDemo.parseSchema(schema)}
      </div>
    );
  }
}
