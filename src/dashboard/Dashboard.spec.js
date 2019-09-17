// Test away
import React from 'react';
import {render} from '@testing-library/react';
import {renderer} from 'react-test-renderer';

import Dashboard from './Dashboard';
import Controls from '../controls/Controls'

describe('Dashboard works', () => {

    test('Dashboard is rendering without crashing', () => {
        render(<Dashboard />);
    });

    test('DashBoard Snapshot matches Dashboard render', () => {
        expect(render(<Dashboard />)).toMatchSnapshot();
    });


    // ### Gate tests ###
    // - defaults to `unlocked` and ``open`
    // - cannot be closed or opened if it is locked

    test('Dashboard Defaults to unlocked and open', () => {
        const {getByText} = render(<Dashboard />);
        getByText(/unlocked/i);
        getByText(/open/i);
    });

    
});

test('Cannot be closed or opened if it is locked', () => {
    const {getByText} = render(<Controls closed={true} locked={true}  />);
    expect(getByText('Open Gate').disabled).toBe(true);

});