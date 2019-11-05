const { isTriangle, isEquilateral, isIsosceles, typeOfTriangle } = require('../triangle');

describe('Triangle', () => {

  describe('isTriangle', () => {
    test('Side Length of Zero', () => {
      expect(isTriangle(0,0,0)).toBe(false);
    });

    test('Improper sides', () => {
      expect(isTriangle(10,5,2)).toBe(false);
    });

    test('Real Triangle', () => {
      expect(isTriangle(3,4,5)).toBe(true);
    })
  });

  describe('isEquilateral', () => {
    test('Non-Equilateral Triangle', () => {
      expect(isEquilateral(3, 4, 5)).toBe(false);
    });

    test('Equilateral Triangle', () => {
      expect(isEquilateral(3, 3, 3)).toBe(true);
    });
  });

  describe('isIsosceles', () => {
    test('Non-Isosceles Triangle', () => {
      expect(isIsosceles(3, 4, 5)).toBe(false);
    });

    test('Isosceles Triangle', () => {
      expect(isIsosceles(3, 3, 2)).toBe(true);
    });
  });

  describe('typeOfTriangle', () => {

    test('Non-Triangle', () => {
      expect(typeOfTriangle(10,5,2)).toBe('Not a triangle');
    });

    test('Equilateral Triangle', () => {
      expect(typeOfTriangle(5, 5, 5)).toBe('Equilateral');
    });

    test('Isosceles Triangle', () => {
      expect(typeOfTriangle(6, 3, 6)).toBe('Isosceles');
    });

    test('Scalen Triangle', () => {
      expect(typeOfTriangle(3,4,5)).toBe('Scalene');
    })
  });
})