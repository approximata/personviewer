const initstate = [
  {
    name: "initname",
    job: "initjob",
    age: "27",
    nick: "initnick",
    employee: true,
  }
];

// const person = (state, action) => {
//   switch (action.type) {
//     case 'DEL_LINE':
//       const newstate = state.filter(function() {
//         return state.nick !== action.nick
//       });
//       return newstate;
//   }
// };

const persons = (state = initstate, action) => {
  switch (action.type) {
    case 'PERSONINFO_LOADED':
    console.log(state);
      return Object.keys(action.personInfo).reduce((prev, key) => prev.concat(action.personInfo[key]), []);

    case 'DEL_LINE':
      console.log("Del line reducer arrived");
      console.log(action.nick);
      console.log(state.filter((e) => e.nick !== action.nick));
      return state.filter((e) => e.nick !== action.nick);
    default:
      return state;
  }
};



export default persons;
