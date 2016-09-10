import signals from './signals';

export default () => {
    return (module) => {
        module.addState({
            ui: {},
            params: {},
            forms: {}
        });
        module.addSignals(signals);
    }
};
