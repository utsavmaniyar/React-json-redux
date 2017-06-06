import React from 'react';

export default class PieChart extends React.Component { // eslint-disable-line react/prefer-stateless-function

    render() {
        const styles = {
            height: 500,
            width: '40%',
            marginTop: '50px',
            display: 'inline-block',
            padding: '5%',
            borderRight: '1px solid #123456'

        }
        return (
            <div style={styles}>
                This is PieChart component. Please write your code for children of this component.
      </div>
        );
    }
}
