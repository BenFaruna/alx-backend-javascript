// type Brand<K, T> = K & { __brand: T }

interface MajorCredits {
  _majorCreditBrand: void,
  credits: number
}

interface MinorCredits {
  _minorCreditBrand: void,
  credits: number
}

// type majorCredits = Brand<MajorCredits, 'MajorCredits'>
// type minorCredits = Brand<MinorCredits, 'MinorCredits'>

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits
  } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits
  } as MinorCredits;
}

// let credit1 = {
//   credits: 3
// } as MajorCredits

// let credit2 = {
//   credits: 2
// } as MinorCredits;

// let credit3 = {
//   credits: 3
// } as MajorCredits

// let credit4 = {
//   credits: 2
// } as MinorCredits;

// console.log('Major credit', sumMajorCredits(credit1, credit3));
// console.log('Minor credit', sumMinorCredits(credit2, credit4));
