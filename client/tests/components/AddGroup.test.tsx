import { fireEvent, screen } from '@testing-library/react';

import { AddGroup } from 'src/components/AddGroup/AddGroup';
import { Path } from 'src/components/Routes';
import { ADD_GROUP, INVALID, VALID } from 'tests/fixtures';
import { createGroupMocks } from 'tests/mocks/groupMocks';
import { lastNavigationPath, oneTick, renderComponent, setField, testFormSnapshots } from 'tests/testHelpers';

describe('AddGroup', () => {
    testFormSnapshots({
        component: AddGroup,
        fields: [
            {
                invalidValue: INVALID.GROUP.DESCRIPTION,
                label: ADD_GROUP.DESCRIPTION,
                validValue: VALID.GROUP.DESCRIPTION
            },
            { invalidValue: INVALID.GROUP.NAME, label: ADD_GROUP.NAME, validValue: VALID.GROUP.NAME }
        ],
        pageName: ADD_GROUP.PAGE_NAME
    });

    const submitAddGroup = async () => {
        setField(ADD_GROUP.NAME, VALID.GROUP.NAME);
        setField(ADD_GROUP.DESCRIPTION, VALID.GROUP.DESCRIPTION);
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);
        await oneTick();
    };

    describe('success', () => {
        it('should create a group and navigate to the groups page', async () => {
            const { container } = renderComponent(AddGroup, [createGroupMocks.success]);

            await submitAddGroup();

            expect(container).toMatchSnapshot();
            expect(lastNavigationPath).toEqual(Path.GROUPS);
        });
    });

    describe('failure', () => {
        it('createGroup: network error', async () => {
            renderComponent(AddGroup, [createGroupMocks.networkError]);

            await submitAddGroup();
            expect(screen.queryByText(/CreateGroup: network error/)).toBeInTheDocument();
        });

        it('createGroup: GraphQL error', async () => {
            renderComponent(AddGroup, [createGroupMocks.graphQLError]);

            await submitAddGroup();

            expect(screen.queryByText(/CreateGroup: GraphQL error/)).toBeInTheDocument();
        });
    });
});
