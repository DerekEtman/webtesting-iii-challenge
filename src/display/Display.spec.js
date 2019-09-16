import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

// ### Display Component####

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

describe('Display Tests', () => {

test('Displays gate and Locked', () => {
    let gateStatus = render(<Display closed={true}/>);
    let lockStatus = render(<Display locked={true} />);
    expect(gateStatus.getByText("Closed"));
    expect(lockStatus.getByText("Locked"));
    

})

test('Displays if gate is open/closed ',() => {
    let displayClosed = render(<Display closed={true} />);
    let displayOpen = render(<Display closed={false} />);
    expect(displayOpen.getByText("Open"));
    expect(displayClosed.getByText("Closed"));

});

test('Displays if gate is locked/unlocked',() => {
    let displayLockClose = render (<Display locked={true} />);
    let displayLockOpen = render(<Display locked={false} />);
    expect(displayLockClose.getByText("Locked"));
    expect(displayLockOpen.getByText("Unlocked"));

});

});