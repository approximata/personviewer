const initstate = [
  {
    name: "initname",
    job: "initjob",
    age: "27",
    nick: "initnick",
    employee: true,
  }
];

const person = (state, action) => {
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

const persons = (state = initstate, action) => {
  switch (action.type) {
    case 'PERSONINFO_LOADED':
      return Object.keys(action.personInfo).reduce((prev, key) => prev.concat(action.personInfo[key]), []);

    case 'ADD_PERSON':
      return [
        ...state,
        person(undefined, action),
      ];

    case 'DEL_LINE':
      return state.filter((s) => s.nick !== action.nick);
    default:
      return state;
  }
};

export default persons;
