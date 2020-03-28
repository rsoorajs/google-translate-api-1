import test from 'ava';
import Configstore from 'configstore';
import translate from './index';

const config = new Configstore('google-translate-api');

test.beforeEach(() => {
    config.clear();
});

test('translate from en to ps (Pashto) - Hello', async t => {
    const res = await translate('hello', {from: 'en', to: 'ps'});

    t.is(res.text, 'سلام');
});

test('translate from en to sv (Swedish) - Hello', async t => {
    const res = await translate('hello', {from: 'en', to: 'sv'});

    t.is(res.text, 'Hej');
});

test('translate from en to sq (Albanian) - Hello', async t => {
    const res = await translate('hello', {from: 'en', to: 'sq'});

    t.is(res.text, 'Përshëndetje');
});

test('translate from en to ar (Arabic) - Hello', async t => {
    const res = await translate('hello', {from: 'en', to: 'ar'});

    t.is(res.text, 'مرحبا');
});

test('translate from en to fr (French) - Hello', async t => {
    const res = await translate('hello', {from: 'en', to: 'fr'});

    t.is(res.text, 'Bonjour');
});
