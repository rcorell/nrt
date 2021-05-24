declare namespace jest {
    interface Matchers<R, _T> {
        toHaveBeenCalledExactlyOnceWith(...args: any[]): R;
        toStringifyEqual(value: object): R;
        _dummy: _T;
    }
}

declare namespace NodeJS {
    interface Global {
        getComponent: (componentType: React.ComponentClass<any> | React.FC<any>, propOverrides?: any) => any;
        WebSocket: any;

        getRender: (
            componentType: React.ComponentClass<any> | React.FC<any>,
            propOverrides?: any,
            store?: any
        ) => any;

        expectComponentToMatchSnapshot: (
            componentType: React.ComponentClass<any> | React.FC<any>,
            propOverrides?: any
        ) => void;

        expectShallowComponentToMatchSnapshot: (
            componentType: React.ComponentClass<any> | React.FC<any>,
            propOverrides?: any
        ) => void;

        expectWrappedComponentToMatchSnapshot: (
            componentType: React.ComponentClass<any> | React.FC<any>,
            store?: any,
            propOverrides?: any
        ) => void;
    }
}
