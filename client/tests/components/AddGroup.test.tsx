import { fireEvent, screen } from '@testing-library/react';

import { AddGroup } from 'src/components/AddGroup';
import { ADD_GROUP, INVALID, VALID } from 'tests/fixtures';
import { createGroupMocks } from 'tests/mocks/groupMocks';
import { oneTick, renderComponent, setField, testFormSnapshots } from 'tests/testHelpers';

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
        it('should create a group', async () => {
            const { container } = renderComponent(AddGroup, [createGroupMocks.success]);

            await submitAddGroup();

            expect(container).toMatchSnapshot();
        });
    });

    describe('failure', () => {
        it('createGroup: network error', async () => {
            renderComponent(AddGroup, [createGroupMocks.networkError]);

            await submitAddGroup();

            expect(screen.queryByText(/createGroup: network error/)).toBeInTheDocument();
        });
    });
});
