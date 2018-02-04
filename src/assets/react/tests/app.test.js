import { createWaitForElement } from 'enzyme-wait';
import React from 'react';
import { MemoryRouter } from 'react-router';
import App from '../Core/app';

it('renders "/" without crashing', () => {
    let mockApiResponse = {
        status: 200,
        tasks: [
            {
                id: 1,
                title: "TEST"
            }
        ]
    };
    fetch.mockResponse(JSON.stringify(mockApiResponse));

    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <App />
        </MemoryRouter>
    );

    return createWaitForElement('ul')(wrapper)
        .then(component => {
            wrapper.update();

            expect(component)
                .toMatchSnapshot();

            expect(component.find('ul').children('h1').length)
                .toBe(1);
            expect(component.find('ul').children('li').length)
                .toBe(mockApiResponse.tasks.length);
        });
});
