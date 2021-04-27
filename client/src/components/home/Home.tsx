import * as React from 'react';
import { connect } from 'react-redux';

import { State } from '../../redux/state.types';

interface HomeStateProps {
}

interface HomeDispatchProps {
}

export type HomeComponentProps = HomeStateProps & HomeDispatchProps;

export class HomeComponent extends React.Component<HomeComponentProps> {
    public constructor(props: HomeComponentProps) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return (
            <h1>Home</h1>
        );
    }
}

export const mapStateToProps = (state: State) => ({
});

export const mapDispatchToProps = (dispatch: Function) => ({
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
