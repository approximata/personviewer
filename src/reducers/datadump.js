const initstate = [
  {
    name: "initname",
    job: "initjob",
    age: "27",
    nick: "initnick",
    employee: true,
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
