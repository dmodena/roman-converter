import { describe, expect, test } from 'bun:test';
import { Converter } from '../dist/converter';

describe('Roman converter', () => {
  test('converts to roman', () => {
    expect(Converter.toRoman(1)).toEqual('1');
  });
});
