import loadJSImportsByType from 'stem/utils/loadJSImportsByType';

let files = require.context('./signals', false, /.js$/);

export default loadJSImportsByType('signals', files);
