import * as React from 'react';
import { connect } from 'react-redux';

import { setBrowserTitle } from 'src/components/utils';
import { State } from 'src/redux/state.types';

interface HomeStateProps {
    dummy: string;
}

// interface HomeDispatchProps {}

export type HomeComponentProps = HomeStateProps; // & HomeDispatchProps;

export class HomeComponent extends React.Component<HomeComponentProps> {
    public constructor(props: HomeComponentProps) {
        super(props);
    }

    componentDidMount() {
        setBrowserTitle('Home');
    }

    render() {
        return <h1>Home</h1>;
    }
}

export const mapStateToProps = (_state: State) => ({});

export const mapDispatchToProps = (_dispatch: Function) => ({});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
