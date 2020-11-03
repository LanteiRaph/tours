//
// Impliment the logical flow for the website. A sequence of instructions guidin gthe interaction of the user with the application.
const Flow = [
  {
    question: ['Select County To Vist'],
    trigger: true,
    ename: 'county',
    description: 'Kenya Has more than 42 county Pik a county To vist and explore.',
    multiple: false,
    title: 'Where Do I vist?',
    parent: null
  },
  {
    question: ['Select things to do.'],
    ename: 'planned',
    description: 'You can selct one or more things to do during your trip.',
    multiple: true,
    trigger: false,
    title: 'What do I do?',
    parent: 'county'
  },
  {
    question: [['Need a Place to sleep?']],
    trigger: true,
    description: 'Dont worry where to sleep during you trip, select one of this places and we will handle the booking for you.',
    multiple: true,
    ename: 'hotel',
    title: 'Where do I sleep?',
    parent: 'county'
  },
  {
    question: [['Need A Ride?'], ['Self driven']],
    description: 'Need a ride through your trip, worry note we have you covered, select one of the rides',
    multiple: true,
    trigger: true,
    ename: 'ride',
    title: 'Do I Need a ride?',
    parent: 'county'
  }
]

export default Flow
