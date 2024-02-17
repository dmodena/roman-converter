export class Converter {
  static readonly conversionTable: [number, string][] = [
    [1000,  'M'],
    [900,  'CM'],
    [500,   'D'],
    [400,  'CD'],
    [100,   'C'],
    [90,   'XC'],
    [50,    'L'],
    [40,   'XL'],
    [10,    'X'],
    [9,    'IX'],
    [5,     'V'],
    [4,    'IV'],
    [1,     'I'],
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

  public static toDecimal(value: string, sum: number = 0, unprocessed: string = ''): number {
    if (value.length === 1) {
      if (unprocessed) {
        value = unprocessed + value;
      }

      sum += this.getGlyphValue(value);
      return sum;
    }

    if (unprocessed) {
      let glyph = unprocessed + value[0];
      sum += this.getGlyphValue(glyph);
      value = value.substring(1);
      return this.toDecimal(value, sum);
    }

    let curr = this.getGlyphValue(value[0]);
    let next = this.getGlyphValue(value[1]);

    if (curr >= next) {
      sum += curr;
      value = value.substring(1);
      return this.toDecimal(value, sum);
    }

    let toBeProcessed = value[0];
    value = value.substring(1);
    return this.toDecimal(value, sum, toBeProcessed);
  }

  private static getGlyphValue(glyph: string): number {
    const entry = this.conversionTable.find(([, r]) => glyph == r);

    if (!entry)
      throw new Error(`Glyph not found: ${glyph}`);

    return entry[0];
  }
}
