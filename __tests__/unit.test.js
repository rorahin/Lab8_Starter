// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('checks a valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('checks an valid phone number', () => {
    expect(functions.isPhoneNumber('(000)000-0000')).toBe(true);
});

test('checks an invalid phone number', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});

test('checks an invalid phone number', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});



test('checks an valid email', () => {
    expect(functions.isEmail('a@gmail.com')).toBe(true);
});
test('checks an valid email', () => {
    expect(functions.isEmail('sadfasdfasdf@outlook.com')).toBe(true);
});
test('checks an invalid email', () => {
    expect(functions.isEmail('asdfasdfasdf')).toBe(false);
});
test('checks an invalid email', () => {
    expect(functions.isEmail('asdfasdfasdf@')).toBe(false);
});
test('checks an invalid email', () => {
    expect(functions.isEmail('asdfasdfasdf@asdfasdf')).toBe(false);
});
test('checks an invalid email', () => {
    expect(functions.isEmail('asdfasdfasdf@asdfasdf.')).toBe(false);
});
test('checks an invalid email', () => {
    expect(functions.isEmail('@@@')).toBe(false);
});


test("checks a valid password", () => {
    expect(functions.isStrongPassword('asdfasdfasdf')).toBe(true);
});
test("checks a valid password", () => {
    expect(functions.isStrongPassword("a2342143")).toBe(true);
});
test("checks a invalid password", () => {
    expect(functions.isStrongPassword("@@")).toBe(false);
});
test("checks a invalid password", () => {
    expect(functions.isStrongPassword("123sdfasdfasdfoiu0u0uas0d0u0asdf0ia0s8d0f80as")).toBe(false);
});


test("checks a valid date", () => {
    expect(functions.isDate('01/01/2020')).toBe(true);
});
test("checks a valid date", () => {
    expect(functions.isDate('1/1/2020')).toBe(true);
});
test("checks a invalid date", () => {
    expect(functions.isDate('01/01/202')).toBe(false);
});
test("checks a invalid date", () => {
    expect(functions.isDate('01/01/20200')).toBe(false);
});


test("checks a valid hex color", () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test("checks a valid hex color", () => {
    expect(functions.isHexColor('#AAA')).toBe(true);
});
test("checks a invalid hex color", () => {
    expect(functions.isHexColor('#0000')).toBe(false);
});
test("checks a invalid hex color", () => {
    expect(functions.isHexColor('##$%#$%')).toBe(false);
});

