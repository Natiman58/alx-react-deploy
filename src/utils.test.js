import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


test('getFullYear', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
});

test('getFooterCopy', () => {
    expect(getFooterCopy("True")).toEqual("Holberton School");
});

test('getFooterCopy', () => {
    expect(getFooterCopy("False")).toEqual("Holberton School main dashboard");
});

test('getLatestNotification', () => {
    expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
});
