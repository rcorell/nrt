import { MockedResponse } from '@apollo/client/testing';

export const INVALID = {
    EMAIL: 'a@a.a',
    GROUP: {
        DESCRIPTION: '',
        NAME: ''
    },
    NAME: '',
    PASSWORD: '',
    TOPIC: {
        DESCRIPTION: '',
        TITLE: ''
    }
};

export const VALID = {
    EMAIL: 'totally@valid.email',
    GROUP: {
        DESCRIPTION: "Bucakroo Banzai's fiercely loyal and dedicated support team.",
        NAME: 'Blue Blaze Irregulars'
    },
    NAME: 'Buckaroo Banzai',
    PASSWORD: 'qwerty1!',
    TOPIC: {
        DESCRIPTION: 'A really great topic description for a really great topic.',
        TITLE: 'A Really Great Topic'
    }
};

export const ADD_GROUP = {
    DESCRIPTION: 'Description',
    NAME: 'Name',
    PAGE_NAME: 'Add Group'
};

export const ADD_TOPIC = {
    DESCRIPTION: 'Description',
    PAGE_NAME: 'Add Topic',
    TITLE: 'Topic'
};

export const TYPENAME = {
    AUTH_PAYLOAD: 'AuthPayload',
    GROUP: 'Group',
    TOPIC: 'Topic',
    USER: 'User'
} as const;

export type StandardMocks<T> = {
    graphQLError: MockedResponse<T>;
    networkError: MockedResponse<T>;
    success: MockedResponse<T>;
};
