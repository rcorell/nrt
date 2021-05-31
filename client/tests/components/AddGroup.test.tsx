import { fireEvent, screen } from '@testing-library/react';

import { createGroupMutationString } from 'src/api/api';
import { AddGroup } from 'src/components/AddGroup';
import { ADD_GROUP, INVALID, VALID } from 'tests/fixtures';
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
            renderComponent(
                AddGroup,
                createGroupMutationString,
                { description: VALID.GROUP.DESCRIPTION, name: VALID.GROUP.NAME },
                {
                    data: { createGroup: { id: '888' } }
                }
            );
            await submitAddGroup();

            expect(true);
        });
    });

    describe('failure', () => {
        it('failed group creation: should display error message', async () => {
            renderComponent(
                AddGroup,
                createGroupMutationString,
                { description: VALID.GROUP.DESCRIPTION, name: VALID.GROUP.NAME },
                {
                    error: new Error('AddGroup failure')
                }
            );
            await submitAddGroup();

            expect(screen.queryByText(/AddGroup failure/)).toBeInTheDocument();
        });
    });
});
