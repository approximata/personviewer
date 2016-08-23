const initstate = [
  {
    name: "initname",
    job: "initjob",
    age: "initnum",
    nick: "initnick",
    employee: false,
  }
];

const datadump = (state = initstate, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        name: action.name,
        job: action.job,
        age: action.age,
        nick: action.nick,
        employee: action.employee,
      };
    default:
      return state;
  }
};

export default datadump;
