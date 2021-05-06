import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import React, { useEffect, useState } from 'react';
import { Topic } from 'src/redux/topics/types';
import { fetchTopics } from 'src/sagas/api';

export const Topics = () => {
    const [topics, setTopics] = useState([] as Topic[]);

    useEffect(() => {
        const fetchTopicsHook = async () => {
            const result = await fetchTopics();

            setTopics(result);
        };

        fetchTopicsHook();
    }, []);

    return (
        <>
            <h1>Topics</h1>
            <BootstrapTable data={topics}>
                <TableHeaderColumn dataField="title" isKey>
                    Topic
                </TableHeaderColumn>
                <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
            </BootstrapTable>
        </>
    );
};
// interface TopicsProps {
//     topics: Topic[];
// }

// interface TopicsDispatchProps {
//     fetchTopics: () => void;
// }

// type TopicsComponentProps = TopicsProps & TopicsDispatchProps;

// export class TopicsComponent extends React.Component<TopicsComponentProps, TopicsState> {
//     public constructor(props: TopicsComponentProps) {
//         super(props);

//         this.state = {
//             topics: []
//         };
//     }

//     componentDidMount() {
//         document.title = 'Topics';
//         this.props.fetchTopics();
//     }

//     render() {
//         return (
//             <>
//                 <h1>Topics</h1>
//                 <BootstrapTable data={this.props.topics}>
//                     <TableHeaderColumn dataField="title" isKey>
//                         Topic
//                     </TableHeaderColumn>
//                     <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
//                 </BootstrapTable>
//             </>
//         );
//     }
// }

// export const mapStateToProps: (state: State) => TopicsProps = (state: State) => ({
//     topics: state.topics.topics
// });

// export const mapDispatchToProps = (dispatch: Function) => ({
//     fetchTopics: () => dispatch(topicsActions.fetchTopics())
// });

// export const Topics = connect(mapStateToProps, mapDispatchToProps)(TopicsComponent);
