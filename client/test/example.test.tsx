import * as React from 'react';
import { ReactWrapper, shallow } from 'enzyme';
import { TaskDetails } from '../src/task-components';

describe('TaskDetails test', () => {
  test('Draws correctly', () => {
    const wrapper = shallow(<TaskDetails match={{ params: { id: 1 } }} />);
    expect(wrapper.containsMatchingElement(<div className="col-2">Description:</div>));
  });
});

/**
 * practice
 * describe('Hello tests', () => {
  test('Hello test', () => {
    const wrapper = shallow(
      <div>
        <b className="example">Hello</b>
      </div>
    );

    expect(
      wrapper.matchesElement(
        <div>
          <b>Hello</b>
        </div>
      )
    ).toEqual(true);

    expect(wrapper.containsMatchingElement(<b>Hello</b>)).toEqual(true);

    expect(wrapper.containsMatchingElement(<b className="example">Hello</b>)).toEqual(true);
  });
});

 */
