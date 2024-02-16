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
}
