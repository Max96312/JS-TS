
// type SomeType = T extends U ? X : Y;

// type SomeType = string;
// type ConditionalType = SomeType extends string ? string : null;

// function fn1<T>(value: T){
//     const fn2 = (
//         arg: T extends boolean ? 'A' : 'B'
//     ) => {};
//     return fn2;
// }
//
// const result = fn1('');

type StringOrNot<T> = T extends  string ? string : never;

type AUnion = string | boolean | never;

const A: StringOrNot<string> = 'string';

type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;



type AType<T> = T extends string | number ? T : never;
type MyResult = AType<string | number | boolean>; // distributively

type BType<T> = (() => T) extends () => string | number ? T : never;
type MyResult2 = BType<string | number | boolean>;

type CType<T> = [ T ] extends [string | number] ? T : never;
type MyResult3 = CType<string | number | boolean>;