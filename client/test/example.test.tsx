import * as React from 'react';
import { ReactWrapper, shallow } from 'enzyme';
import { TaskDetails, TaskList } from '../src/task-components';
import { Row, Column, Form, Button } from '../src/widgets';
import { NavLink } from 'react-router-dom';

describe('Task components test', () => {
  test('TaskList draws correctly', () => {
    const wrapper = shallow(<TaskList />);

    setTimeout(() => {
      expect(
        wrapper.containsAllMatchingElements([
          <NavLink to="tasks/3">Starte prosjekt</NavLink>,
          <NavLink to="tasks/5">Lever øving</NavLink>,
          <NavLink to="tasks/6">Lese leksjon</NavLink>,
        ])
      );
    });
  });

  test('TaskDetails Draws correctly', () => {
    const wrapper = shallow(<TaskDetails match={{ params: { id: 8 } }} />);
    expect(wrapper.containsMatchingElement(<Column>Lære jest</Column>));
    expect(wrapper.containsMatchingElement(<Column>se på nettressurser</Column>));
    expect(
      wrapper.containsAllMatchingElements([
        <Column>Lære jest</Column>,
        <Column>se på nettressurser</Column>,
        // @ts-ignore
        <Form.Checkbox checked={false} />,
      ])
    );
  });
  test('TaskDetails draws correctly (using snapshot)', (done) => {
    const wrapper = shallow(<TaskDetails match={{ params: { id: 7 } }} />);
    setTimeout(() => {
      expect(wrapper).toMatchSnapshot();
      done();
    });
  });
});

/**
 * 
 * 
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
