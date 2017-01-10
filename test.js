'use strict';

import test from 'ava';
import generateDays from './';
import assert from 'assert';

const TEST_MONTH = [
    { dayIndex: 6, weekIndex: 52, date: '1-1-2017' },
    { dayIndex: 0, weekIndex: 1, date: '2-1-2017' },
    { dayIndex: 1, weekIndex: 1, date: '3-1-2017' },
    { dayIndex: 2, weekIndex: 1, date: '4-1-2017' },
    { dayIndex: 3, weekIndex: 1, date: '5-1-2017' },
    { dayIndex: 4, weekIndex: 1, date: '6-1-2017' },
    { dayIndex: 5, weekIndex: 1, date: '7-1-2017' },
    { dayIndex: 6, weekIndex: 1, date: '8-1-2017' },
    { dayIndex: 0, weekIndex: 2, date: '9-1-2017' },
    { dayIndex: 1, weekIndex: 2, date: '10-1-2017' },
    { dayIndex: 2, weekIndex: 2, date: '11-1-2017' },
    { dayIndex: 3, weekIndex: 2, date: '12-1-2017' },
    { dayIndex: 4, weekIndex: 2, date: '13-1-2017' },
    { dayIndex: 5, weekIndex: 2, date: '14-1-2017' },
    { dayIndex: 6, weekIndex: 2, date: '15-1-2017' },
    { dayIndex: 0, weekIndex: 3, date: '16-1-2017' },
    { dayIndex: 1, weekIndex: 3, date: '17-1-2017' },
    { dayIndex: 2, weekIndex: 3, date: '18-1-2017' },
    { dayIndex: 3, weekIndex: 3, date: '19-1-2017' },
    { dayIndex: 4, weekIndex: 3, date: '20-1-2017' },
    { dayIndex: 5, weekIndex: 3, date: '21-1-2017' },
    { dayIndex: 6, weekIndex: 3, date: '22-1-2017' },
    { dayIndex: 0, weekIndex: 4, date: '23-1-2017' },
    { dayIndex: 1, weekIndex: 4, date: '24-1-2017' },
    { dayIndex: 2, weekIndex: 4, date: '25-1-2017' },
    { dayIndex: 3, weekIndex: 4, date: '26-1-2017' },
    { dayIndex: 4, weekIndex: 4, date: '27-1-2017' },
    { dayIndex: 5, weekIndex: 4, date: '28-1-2017' },
    { dayIndex: 6, weekIndex: 4, date: '29-1-2017' },
    { dayIndex: 0, weekIndex: 5, date: '30-1-2017' },
    { dayIndex: 1, weekIndex: 5, date: '31-1-2017' }
];

test('Testing january 2017', async t => {
    t.is(assert.deepEqual(generateDays(0, 2017), TEST_MONTH));
});