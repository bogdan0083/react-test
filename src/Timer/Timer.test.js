  import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import { shallow, mount, render } from 'enzyme';

describe('<Timer />', () => {

  const wrapper = mount(<Timer />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Timer />, div);
  });

  it('should have timer value', () => {
    expect(wrapper.find('.timer-value')).toHaveLength(1);
  });

  // it('should have timer value of 4', (done) => {
  //   setTimeout(() => {
  //     //console.log(wrapper.state('secondsElapsed'));
  //     wrapper
  //       .find('.timer-stop')
  //       .simulate('click');
  //   }, 3000);
  //
  //   setTimeout(() => {
  //     expect(wrapper.state('secondsElapsed')).toBe(4);
  //     done();
  //   }, 4000);
  // });

});
