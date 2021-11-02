import * as React from 'react';
import { Alert } from '../src/widgets';
import { shallow } from 'enzyme';

describe('Alert tests', () => {
  test('No alerts initially', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.matchesElement(<div></div>)).toEqual(true);
  });

  test('Open 3 alert messages, and close the second alert message', (done) => {
    const wrapper = shallow(<Alert />);

    Alert.danger('Test 1');
    Alert.success('Test 2');
    Alert.danger('Test 3');

    // Wait for events to complete
    setTimeout(() => {
      expect(
        wrapper.matchesElement(
          <div>
            <div>
              Test 1<button />
            </div>
            <div>
              Test 2
              <button />
            </div>
            <div>
              Test 3
              <button />
            </div>
          </div>
        )
      ).toEqual(true);

      wrapper.find('button.btn-close').at(1).simulate('click');

      expect(
        wrapper.matchesElement(
          <div>
            <div>
              Test 1
              <button />
            </div>
            <div>
              Test 3
              <button />
            </div>
          </div>
        )
      ).toEqual(true);

      done();
    });
  });
});
