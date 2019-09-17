import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

// ### Controls Component//

// x -  provide buttons to toggle the `closed` and `locked` states.
// x - buttons' text changes to reflect the state the door will be in if clicked
// x - the closed toggle button is disabled if the gate is locked
// x - the locked toggle button is disabled if the gate is open

describe('Controls work', () => {
    test('Buttons are displaying', () => {
        const btnDisplay = render(<Controls />);
        expect(btnDisplay.getByText('Lock Gate'));
        expect(btnDisplay.getByText('Close Gate'));

    })

    test('Button text toggles on gate status', () => {
        const doorState = render(<Controls closed={true} />)
        expect(doorState.getByText('Open Gate'));
    })

    test('Open gate button is disabled if gate is locked', () =>{
        const gateLocked = render(<Controls locked={true} closed={true} />)
        expect(gateLocked.getByText('Open Gate').disabled).toBe(true);
    })

    test('Locked Toggle Button is disabled if gate is open', () => {
        const gateOpen = render(<Controls locked={false} closed={false} />);
        expect(gateOpen.getByText('Lock Gate').disabled).toBe(true);
    })

})