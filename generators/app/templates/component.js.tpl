import React from 'react';
import { connect } from 'cerebral-view-react';

import Module from 'stem/decorators/moduleDecorator';

import '../styles/<%= lcName %>.scss';

@connect((props) => {
    let modulePath = props.modulePath;
    return {
        ui: `${modulePath}.ui`,
        data: `${modulePath}.data`,
        params: `${modulePath}.params`,
        forms: `${modulePath}.forms`
    };
})
@Module()
class <%= name %> extends React.Component {

    static defaultProps = {
        className: '<%= lcName %>'
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={this.bem()}>
                Hello, <%= name %>
            </section>
        );
    }
}

export default <%= name %>;