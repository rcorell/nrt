/**
 * This file will be executed after the test framework has been prepared.
 * but before each test file's first describe block,
 *
 * Reference: https://jestjs.io/docs/en/configuration.html#setuptestframeworkscriptfile-string
 **/
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import _ from 'lodash';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { GlobalContextProvider } from 'src/components/GlobalContextProvider';
import { setLastNavigationPath } from 'tests/testHelpers';

jest.mock('hookrouter', () => {
    return {
        ...jest.requireActual('hookrouter'),
        navigate: (path: string) => {
            setLastNavigationPath(path);
        }
    };
});

jest.setTimeout(10 * 60 * 1000);

expect.extend({
    toHaveBeenCalledExactlyOnceWith(func, ...args) {
        let pass = true;
        let message = `expected ${func.getMockName()} to be called exactly once with ${JSON.stringify(args)}`;

        if (func.mock.calls.length !== 1) {
            pass = false;
            message += `\n    - called ${func.mock.calls.length} times`;
        }

        if (pass && !_.isEqual(func.mock.calls[0], args)) {
            pass = false;
            message += `\n    - called with ${JSON.stringify(func.mock.calls[0])}`;
        }

        return {
            message: () => message,
            pass
        };
    },
    toStringifyEqual(received, expected) {
        const RECEIVED_AS_STRING: string = JSON.stringify(received, Object.keys(received).sort());
        const EXPECTED_AS_STRING: string = JSON.stringify(expected, Object.keys(expected).sort());

        return {
            message: () => `expected\n ${RECEIVED_AS_STRING}\n to equal\n ${EXPECTED_AS_STRING}`,
            pass: RECEIVED_AS_STRING === EXPECTED_AS_STRING
        };
    }
});

global.expectComponentToMatchSnapshot = (
    componentType: React.ComponentClass<any> | React.FC<any>,
    propOverrides: any = {}
) => {
    expect(global.getRender(componentType, propOverrides)).toMatchSnapshot();
};

global.expectShallowComponentToMatchSnapshot = (
    componentType: React.ComponentClass<any> | React.FC<any>,
    propOverrides: any = {}
) => {
    const component = global.getComponent(componentType, propOverrides);
    const shallowComponent = shallow(component);
    expect(toJson(shallowComponent)).toMatchSnapshot();
};

global.expectWrappedComponentToMatchSnapshot = (
    componentType: React.ComponentClass<any> | React.FC<any>,
    propOverrides: any = {}
) => {
    expect(global.getRender(componentType, propOverrides)).toMatchSnapshot();
};

global.getRender = (componentType: React.ComponentClass<any> | React.FC<any>, propOverrides: any = {}) => {
    return renderer.create(
        <GlobalContextProvider>
            <MockedProvider addTypename={false}>{global.getComponent(componentType, propOverrides)}</MockedProvider>
        </GlobalContextProvider>
    );
};

/* eslint-disable react/display-name */
global.getComponent = (componentType: React.ComponentClass<any> | React.FC<any>, propOverrides: any = {}) => {
    return React.createElement(componentType, propOverrides);
};
