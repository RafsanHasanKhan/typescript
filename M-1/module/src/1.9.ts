{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: 'rafsan',
    age: 50,
    gender: 'male',
    contactNo: '0172564663',
    address: 'ctg',
  };

  const student2: Student = {
    name: 'hasan',
    age: 40,
    gender: 'male',
    address: 'dhk',
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = 'rafsan';
  const isAdmin: IsAdmin = true;
  type Add = (num1: number,num2: number) => number
  const add: Add = (num1, num2): number => num1 + num2;
}
