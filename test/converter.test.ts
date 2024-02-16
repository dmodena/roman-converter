import { describe, expect, test } from 'bun:test';
import { Converter } from '../dist/converter';

describe('Roman converter', () => {
  const cases: [number, string][] = [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'IX'],
    [16, 'XVI'],
    [27, 'XXVII'],
    [48, 'XLVIII'],
    [49, 'XLIX'],
    [59, 'LIX'],
    [66, 'LXVI'],
    [93, 'XCIII'],
    [141, 'CXLI'],
    [163, 'CLXIII'],
    [166, 'CLXVI'],
    [402, 'CDII'],
    [575, 'DLXXV'],
    [666, 'DCLXVI'],
    [911, 'CMXI'],
    [1024, 'MXXIV'],
    [1666, 'MDCLXVI'],
    [3000, 'MMM'],
    [3001, 'MMMI'],
    [3999, 'MMMCMXCIX'],
  ];

  test.each(cases)("Convert to Roman %p = %p", (decimal, roman) => {
    expect(Converter.toRoman(decimal)).toEqual(roman);
  });

  test.each(cases)("Convert to Decimal %p = %p", (decimal, roman) => {
    expect(Converter.toDecimal(roman)).toEqual(decimal);
  });
});
