import lmtest from 'ava';
import Configstore from 'configstore';
import translate from './index';

const config = new Configstore('google-translate-api');

test.beforeEach(() => {
    config.clear();
});

test('translate from en to dutch - Hello', async t => {
    const res = await translate('hello', {from: 'en', to: 'nl'});

    t.is(res.text, 'Hallo');
});
