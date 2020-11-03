//
// Declare and implimanet the schema collection. Schema represents the database structure
const Schema = [
  {
    ename: 'user',
    columns: ['username', 'is_valid']
  },
  {
    ename: 'county',
    columns: ['name', 'code', 'description', ['trip']],
    primary: true
  },
  {
    ename: 'adventure',
    columns: ['price', 'img', 'description', 'schedule_date', 'title'],
    primary: true
  },
  {
    ename: 'where_to_stay',
    columns: ['name', 'img', 'rating', ['price']],
    primary: true
  },
  {
    ename: 'ride',
    columns: ['model', ['price'], 'seats', 'driven'],
    primary: true
  },
  {
    ename: 'trip',
    columns: ['is_valid', ['county'], 'date', ['trip']],
    primary: false
  },
  {
    ename: 'payment',
    columns: ['date', ['type'], ['user']],
    primary: false
  },
  {
    ename: 'mpesa',
    columns: ['amount'],
    primary: false
  },
  {
    ename: 'cash',
    columns: ['amount'],
    primary: false
  },
  {
    ename: 'paypal',
    columns: ['amount'],
    primary: false
  }
]

export default Schema
