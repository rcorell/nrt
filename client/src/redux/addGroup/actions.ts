import { createAction } from 'typesafe-actions';

export const addGroup = createAction('ADDGROUP_ADD_GROUP', resolve => (name: string, description: string) =>
    resolve({ name, description })
);
