const siren_validator = require("./siren_validator");

test("can validate length of siren", () => {
let siren = 123456789;
    validator = new siren_validator();
    expect(validator.validate_length(siren)).toBe(true);
});

test("can extract ranks", () => {
    let siren = 123456789;
    let evens = [8,6,4,2];
    let odds = [9,7,5,3,1];
    validator = new siren_validator();
    expect(validator.extract_ranks(siren)).toStrictEqual({odds, evens});
});

test("can multiple numbers by 2 and reduce", () => {
    let evens = [8,6,4,2];
    let evens_x2 = [7,3,8,4];
    validator = new siren_validator();
    expect(validator.multiple_by_two_and_reduce(evens)).toStrictEqual(evens_x2);
});

test("can add all the numbers and check if is multiple of 10", () => {
    let siren = 809554132;
    validator = new siren_validator();
    expect(validator.verify_siren(siren)).toBe(true);
});

test("check invalid", () => {
    let siren = 123456789;
    validator = new siren_validator();
    expect(validator.verify_siren(siren)).toBe(false);
});

