export class Converter {
  static readonly conversionTable: [number, string][] = [
    [1000, 'M'],
    [900,  'CM'],
    [500,  'D'],
    [400,  'CD'],
    [100,  'C'],
    [90,   'XC'],
    [50,   'L'],
    [40,   'XL'],
    [10,   'X'],
    [9,    'IX'],
    [5,    'V'],
    [4,    'IV'],
    [1,    'I'],
  ];

  public static toRoman(value: number): string {
    const output: string[] = [];

    this.conversionTable.forEach(([d, r]) => {
      while (value >= d) {
        value -= d;
        output.push(r);
      }
    });

    return output.join('');
  }

  public static toDecimal(value: string): number {
    if (value.length === 1)
      return this.getGlyphValue(value);

    let result = 0;
    let pairProcessed = false;

    for (let i = 0, j = 1; j < value.length; i++, j++) {
      if (pairProcessed) {
        pairProcessed = false;
        continue;
      }

      let iValue = this.getGlyphValue(value[i]);
      let jValue = this.getGlyphValue(value[j]);

      if (iValue >= jValue)
        result += iValue;
      else {
        let pair = value.substring(i, i + 2);
        result += this.getGlyphValue(pair);
        pairProcessed = true;
      }
    }

    if (!pairProcessed)
      result += this.getGlyphValue(value.at(-1) ?? '');

    return result;
  }

  private static getGlyphValue(glyph: string): number {
    const entry = this.conversionTable.find(([, r]) => glyph == r);

    if (!entry)
      throw new Error(`Glyph not found: ${glyph}`);

    return entry[0];
  }
}
