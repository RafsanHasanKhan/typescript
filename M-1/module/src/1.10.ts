{
  // union types

  type FrontendDeveloper = 'fakibazdeveloper' | 'juniordeveloper';
  type FullStackDeveloper = 'frontEndDeveloper' | 'expertDeveloper';
  type Developer = FrontendDeveloper | FullStackDeveloper;
  const newDeveloper: FrontendDeveloper = 'fakibazdeveloper';

  type User = {
    name: string;
    email: string;
    gender: 'male' | 'female';
    bloodGroup: 'A+' | 'A-' | 'B+';
  };

  const user1: User = {
    name: 'rafsan',
    email: 'rafsan@gmail.com',
    gender: 'male',
    bloodGroup: 'A+',
  };

  type FrontEndExport = {
    skills: string[];
    designation1: 'Frontend Developer';
  };

  type BackEndExport = {
    skills: string[];
    designation1: 'BackEnd Developer';
  };

  type FullStackDeveloperExpert = FrontEndExport & BackEndExport;

  const fullstackdeveloperexport: FullStackDeveloperExpert = {
    skills: ['HTML', 'CSS', 'Express'],
    designation1: 'Frontend developer',
    designation2: 'backend developer',
  };

  //
}
