{
  // Reference Type --> Object

  const user: {
    readonly company: 'programming hero'; // type ---> literal types
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: 'programming hero',
    firstName: 'rafsan',
    middleName: 'hasan',
    lastName: 'khan',
    isMarried: true,
  };

  // user.company = 'ph'
}