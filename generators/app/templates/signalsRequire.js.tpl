import loadJSImportsByType from 'stem/utils/loadJSImportsByType';

let files = require.context('./signals', true, /.js$/);

export default loadJSImportsByType('signals', files);