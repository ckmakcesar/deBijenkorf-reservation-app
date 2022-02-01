import {
  isEmptyObj,
  mapByKey,
  removeObjProps,
  isFromTodayOn,
  cleanObject,
} from './utils';

describe('isEmptyObj(arg) - check if the argument is an empty object or not', () => {
  it('should return true with an empty object', () => {
    expect(isEmptyObj({})).toEqual(true);
  });
  it('should return false with an non-empty object', () => {
    expect(isEmptyObj({ a: 123 })).toEqual(false);
  });
  it('should return false with an empty array', () => {
    expect(isEmptyObj([])).toEqual(false);
  });
  it('should return false with an empty string', () => {
    expect(isEmptyObj('')).toEqual(false);
  });
  it('should return false with a string', () => {
    expect(isEmptyObj('Bonsoir')).toEqual(false);
  });
  it('should return false with null', () => {
    expect(isEmptyObj(null)).toEqual(false);
  });
  it('should return false with undefined', () => {
    expect(isEmptyObj(undefined)).toEqual(false);
  });
  it('should return false with NaN', () => {
    expect(isEmptyObj(NaN)).toEqual(false);
  });
  it('should return false with boolean', () => {
    expect(isEmptyObj(true)).toEqual(false);
  });
});

describe('mapByKey([obj], key) - convert from Array of Objs to Object of Objs (prop=Obj; key from 2nd arg)', () => {
  it('should return empty object from empty array', () => {
    const emptyArray = [];
    const mapFromEmptyArray = mapByKey(emptyArray, 'anyKey');
    expect(isEmptyObj(mapFromEmptyArray)).toEqual(true);
    expect(JSON.stringify(mapFromEmptyArray)).toEqual(JSON.stringify({}));
  });

  it('should return an object (with keys from 2nd argument) from an array of objects', () => {
    const arrayOfObjects = [
      { id: 55, name: 'Centraal', address: 'Mid Amsterdam' },
      { id: 77, name: 'Zeeburg', address: 'Nord Oost Amsterdam' },
    ];
    const expectedOutput = {
      '55': { id: 55, name: 'Centraal', address: 'Mid Amsterdam' },
      '77': { id: 77, name: 'Zeeburg', address: 'Nord Oost Amsterdam' },
    };
    const mapOfObjectsById = mapByKey(arrayOfObjects, 'id');
    // "mapOfObjectsById" should be the same as "expectedOutput" above - just that we cannot directly compare objects
    expect(mapOfObjectsById['55'].id).toEqual(expectedOutput['55'].id);
    expect(mapOfObjectsById['55'].name).toEqual(expectedOutput['55'].name);
    expect(mapOfObjectsById['55'].address).toEqual(expectedOutput['55'].address);
    expect(JSON.stringify(mapOfObjectsById)).toEqual(JSON.stringify(expectedOutput));
  });
});

describe('removeObjProps(obj, props) - copy an object, remove prop(s) from the copy, and return the copy', () => {
  const testObj = {
    a: 1, b: 2, c: 3
  };
  it('should return an object with one less prop - with string as 2nd argument, on removing 1 prop', () => {
    const result = removeObjProps(testObj, 'a');
    expect(JSON.stringify(result)).toEqual(JSON.stringify({ b: 2, c: 3 }));
  });
  it('should return an object with one less prop, on removing 1 prop', () => {
    const result = removeObjProps(testObj, ['a']);
    expect(JSON.stringify(result)).toEqual(JSON.stringify({ b: 2, c: 3 }));
  });
  it('should return an object with two less props, on removing 2 props', () => {
    const result = removeObjProps(testObj, ['a', 'b']);
    expect(JSON.stringify(result)).toEqual(JSON.stringify({ c: 3 }));
  });
  it('should return an empty object, on removing 3 props', () => {
    const result = removeObjProps(testObj, ['a', 'b', 'c']);
    expect(JSON.stringify(result)).toEqual(JSON.stringify({}));
  });
});

describe('isFromTodayOn(time) - check if the argument is an empty object or not', () => {
  it('should return true with 2048-01-01', () => {
    expect(isFromTodayOn('2048-01-01')).toEqual(true);
  });
  it('should return false with 1999-01-01', () => {
    expect(isFromTodayOn('1999-01-01')).toEqual(false);
  });
});

describe('cleanObject(obj) - directly remove props from the original obj, and return it', () => {
  it('should retain only props that are NOT empty string / null / undefined', () => {
    const testObj = {
      a: 123, b: 'xyz', c: null, d: undefined, e: '', f: NaN, g: true, h: {}, i: false
    };
    const expectedCleanedObj = {
      a: 123, b: 'xyz', f: NaN, g: true, h: {}, i: false
    };
    expect(JSON.stringify(cleanObject(testObj))).toEqual(JSON.stringify(expectedCleanedObj));
  });
});
