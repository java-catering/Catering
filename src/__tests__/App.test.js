import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Components Container', () => {
  let app;
  beforeEach(() => app = shallow(<App/>));
  it("should render correctly in 'debug' mode ", () => {
    expect(app).toMatchSnapshot();
  });

  it("should have a class of name Container", () => {
    
    expect(app.find('div.App')).toHaveLength(1);
  });
});
