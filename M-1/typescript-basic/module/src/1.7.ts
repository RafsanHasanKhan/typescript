{
  // spread operator
  // rest operator
  // destructuring

  // learn spread operator

  const bros1: string[] = ['rafsan', 'hasan', 'khan'];
  const bros2: string[] = ['rifat', 'hasan1', 'khan1'];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: 'rafsan',
    redux: 'hasan',
    dbms: 'khan',
  };
  const mentors2 = {
    prisma: 'rifat',
    next: 'hasan2',
    cloud: 'khan2',
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator

  const greetFriends = (...friends: string[]) => {
    // console.log(`hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`hi ${friend}`));
  };
  greetFriends('rafsan', 'hasan', 'khan');
}
