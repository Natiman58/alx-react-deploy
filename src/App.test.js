import App from './App';
import renderer from 'react-test-renderer';


test('App is rendered without crashing', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('App renders a div with the class App-header', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // To check the presence of div with the class App-header
  const appHeader = tree.children.find((child) => child.props.className === 'App-header');
  expect(appHeader).toBeDefined();
});

test('App renders a div with the class App-body', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // To check the presence of the div with the class App-body
  const appBody = tree.children.find((child) => child.props.className === 'App-body');
  expect(appBody).toBeDefined();
});

test('App renders a div with the class App-footer', () => {
  const component = renderer.create(<App/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // To check the presence of div with the class App-footer
  const appFooter = tree.children.find((child) => child.props.className === "App-footer");
  expect(appFooter).toBeDefined();
});
