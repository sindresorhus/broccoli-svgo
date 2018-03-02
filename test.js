import fs from 'fs';
import test from 'ava';
import del from 'del';

test.afterEach(() => {
	del.sync('temp');
});

test('minimizes SVG', t => {
	const actual = fs.statSync('temp/fixture.svg').size;
	const fixture = fs.statSync('fixture/fixture.svg').size;
	t.true(actual < fixture);
});
