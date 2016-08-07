import signals from './signals';

export default () => {
    return (module) => {
        module.addState({
            ui: {},
            data: {},
            params: {},
            forms: {}
        });
        module.addSignals(signals);
    }
};