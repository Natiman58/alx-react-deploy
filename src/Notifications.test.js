import Notifications from './Notifications';
import renderer from 'react-test-renderer';

test('Notifications renders without crashing', () => {
    const component = renderer.create(<Notifications />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Notifications renders 3 list items', () => {
    const component = renderer.create(<Notifications />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // To check that notifications renders 3 list items
    const notificationsList = tree.children[2].children.filter((child) => child.type === 'li');
    expect(notificationsList).toHaveLength(3);
});

test('Notifications reders the text "Here is the list of notifications" ', () => {
    const component = renderer.create(<Notifications />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // To check that notifications renders "Here is the list of notifications" text
    const paragraphText = tree.children[1].children[0];
    expect(paragraphText).toEqual("Here is the list of notifications");
});