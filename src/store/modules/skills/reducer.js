const defaultValues = [
  { name: 'Python & Django', percentage: 80 },
  { name: 'Javascript & JQuery', percentage: 91 },
  { name: 'HTML5, CSS, SASS & LESS', percentage: 90 },
  { name: 'Ruby on Rails', percentage: 79 },
];

export default function skills(state = defaultValues, action) {
  switch (action.type) {
    case 'ADD_SKILLS':
      return [...state, action.skill];
    default:
      return state;
  }
}
