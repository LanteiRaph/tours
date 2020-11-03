import { Promise } from 'core-js'

export default {
  values: [
    {
      ename: 'ride',
      values: [
        {
          id: 'toyota_land_cruiser',
          model: 'Toyota land Cruiser',
          price: 3000,
          seats: 10,
          img: '2020-toyota-land-cruiser-heritage-edition.jpg'
        },
        {
          id: 'toyota_alferd',
          model: 'Toyota Alferd',
          price: 3000,
          seats: 10,
          img: 'toyota-alphard.jpg'
        },
        {
          id: 'toyota_alferd',
          model: 'Toyota Alferd',
          price: 3000,
          seats: 10,
          img: 'toyota-alphard.jpg'
        },
        {
          id: 'toyota_land_cruiser',
          model: 'Toyota Alferd',
          price: 3000,
          seats: 10,
          img: '2020-toyota-land-cruiser-heritage-edition.jpg'
        },
        {
          id: 'toyota_land_cruiser',
          model: 'Toyota Alferd',
          price: 3000,
          seats: 10,
          img: '2020-toyota-land-cruiser-heritage-edition.jpg'
        }
      ]
    },
    {
      ename: 'planned',
      values: [
        {
          id: 'elepahent',
          img: 'elephant.jpg',
          name: 'Elephant Riding',
          description:
            'Ever Ride an elenphant? Join githengi in his ride with the elephant.',
          planned: true,
          price: {
            max_price: 7000,
            min_price: 6500
          },
          date: '2020/09/30'
        },
        {
          id: 'fourt',
          img: 'fourt.jpg',
          name: 'Fourt Jesus',
          description:
            'Desciver the secrets of the past days. Vist fourt jesus and experince a life before your time.',
          planned: true,
          price: {
            max_price: 5000,
            min_price: 4500
          },
          date: '2020/09/30'
        },
        {
          id: 'giraffe',
          img: 'giraff_center.jpg',
          name: 'Giraffe Center',
          description:
            'Meet the wide  with Feeding the tall animals and have fun realing.',
          planned: true,
          price: {
            max_price: 6000,
            min_price: 5500
          },
          date: '2020/09/30'
        },
        {
          id: 'lions',
          img: 'lions.jpg',
          name: 'Lions Den',
          description:
            'See the wild, explore the nature. See the king of the wild by living a day in the wild.',
          planned: false,
          price: {
            max_price: 7000,
            min_price: 6500
          },
          date: '2020/09/30'
        },
        {
          id: 'maasai',
          img: 'maasai.jpg',
          name: 'Maasai culture',
          description:
            'Want to jump like the maasai, vist kajiado and expl ore their culture. The Meat is just waaahh!!!',
          planned: true,
          price: {
            max_price: 70000,
            min_price: 65000
          },
          date: '2020/09/30',
          isRatedTop: true
        },
        {
          id: 'mombasa',
          img: 'mombasa.jpg',
          name: 'Mombasa Raha',
          description:
            'Mombasa is one of the world leading destinations. be part of the world by visting this greate place.',
          planned: '',
          price: '',
          date: '2020/09/30'
        },
        {
          id: 'mount_kenya',
          img: 'mount_kenya.jpg',
          name: 'Climb Mount Kenya',
          description:
            'Climb the rocks of mount kenya a see the univers from the pick for yourself.',
          planned: true,
          price: {
            max_price: 6000,
            min_price: 5500
          },
          date: '2020/09/30'
        },
        {
          id: 'mt_kenya',
          img: 'mt_kenya.jpg',
          name: 'Climb Mount Kenya',
          description:
            'Climb the rocks of mount kenya a see the univers from the pick for yourself.',
          planned: true,
          price: {
            max_price: 9000,
            min_price: 8500
          },
          date: '2020/09/30'
        },
        {
          id: 'ngong',
          img: 'ngong_hill.jpg',
          name: 'Ngong Hills Hike',
          description:
            'Hike the ngong hill on a surtadya afternoon and end your week with a bombshell',
          planned: true,
          price: {
            max_price: 6000,
            min_price: 5500
          },
          date: '2020/09/30'
        },
        {
          id: 'see_paris',
          img: 'see_paris.jpg',
          name: 'Paris Trip',
          description: 'Travel to paris and have fun with the french',
          planned: '',
          price: '',
          date: '2020/09/30'
        },
        {
          id: 'swim',
          img: 'swim.jpg',
          name: 'Swimming Date',
          description:
            'Swim with the dolphine on sunday evening and enjoy the great sun set of the maara.',
          planned: true,
          price: {
            max_price: 6000,
            min_price: 5500
          }
        }
      ]
    },
    {
      ename: 'county',
      values: [
        {
          id: 'nairobi',
          name: 'Nairobi',
          places: [
            { name: 'Giraffe Center', slug: 'giraffe_center', img: '' },
            { name: 'National Park', slug: 'national_park', img: '' }
          ],
          img: 'nairobi.jpeg'
        },
        {
          id: 'mombasa',
          name: 'Mombasa',
          places: [
            { name: 'Diani Beach', slug: 'diani_beach', img: '' },
            { name: 'Puani life trip', slug: 'puani_life', img: '' }
          ],
          img: 'mombasa.jpg'
        },
        {
          id: 'kisumu',
          name: 'Kisumu',
          places: [
            { name: 'Lake victory ', slug: 'lake_victoria', img: '' },
            { name: 'Kisumu Natinal park', slug: 'kisumu_park', img: '' }
          ],
          img: 'kisumu.jpg'
        },
        {
          id: 'kajiado',
          name: 'kajiado',
          places: [
            { name: 'Kiserian Dam Center', slug: 'kiserain_dam', img: '' },
            { name: 'Ngong Hills', slug: 'ngong_hills', img: '' }
          ],
          img: 'kajiado.jpg'
        }
      ]
    },
    {
      ename: 'hotel',
      values: [
        {
          name: 'Olesereni Hotel',
          description: 'Eat and dinner with the best of the best',
          price: 2000,
          img: '5star.jpg'
        },
        {
          name: 'Olesereni Hotel',
          description: 'Eat and dinner with the best of the best',
          price: 2000,
          location: '',
          img: 'hilton.jpg'
        },
        {
          name: 'Olesereni Hotel',
          description: 'Eat and dinner with the best of the best',
          price: 2000,
          img: 'kenpinskey.jpg',
          location: ''
        },
        {
          name: 'Olesereni Hotel',
          description: 'Eat and dinner with the best of the best',
          price: 2000,
          img: 'olesereni.jpg',
          location: ''
        },
        {
          name: 'Olesereni Hotel',
          description: 'Eat and dinner with the best of the best',
          price: 2000,
          img: '5star.jpg'
        },
        {
          name: 'Olesereni Hotel',
          description: 'Eat and dinner with the best of the best',
          price: 2000,
          img: 'olesereni.jpg',
          location: ''
        },
        {
          name: 'Olesereni Hotel',
          description: 'Eat and dinner with the best of the best',
          price: 2000,
          img: 'olesereni.jpg',
          location: ''
        },
        {
          name: 'Olesereni Hotel',
          description: 'Eat and dinner with the best of the best',
          price: 2000,
          img: 'kenpinskey.jpg'
        }
      ]
    },
    {
      ename: 'place',
      values: [
        {
          id: 'kajiado_town',
          img: 'kisumu.jpg',
          name: 'Kajaod town',
          description: 'Vist kajiado town and have fun ntaracting with the locals of the area giving hand on the ground experinces'
        },
        {
          id: 'Mopel Picnic site',
          img: 'kisumu.jpg',
          name: 'Kajaod town',
          description: 'Vist kajiado town and have fun ntaracting with the locals of the area giving hand on the ground experinces'
        },
        {
          id: 'Olopolos',
          img: 'kajiado.jpg',
          name: 'Kajaod town',
          description: 'Vist kajiado town and have fun ntaracting with the locals of the area giving hand on the ground experinces'
        },
        {
          id: 'kajiado_town',
          img: 'kisumu.jpg',
          name: 'Kajaod town',
          description: 'Vist kajiado town and have fun ntaracting with the locals of the area giving hand on the ground experinces'
        }
      ]
    }
  ],
  plan () {
    //
    // Return an sequecs of steps needed to plan a trip.
    return {
      counties: [
        {
          name: 'Nairobi',
          places: [
            { name: 'Giraffe Center', slug: 'giraffe_center', img: '' },
            { name: 'National Park', slug: 'national_park', img: '' }
          ],
          img: 'nairobi.jpeg'
        },
        {
          name: 'Mombasa',
          places: [
            { name: 'Diani Beach', slug: 'diani_beach', img: '' },
            { name: 'Puani life trip', slug: 'puani_life', img: '' }
          ],
          img: 'mombasa.jpg'
        },
        {
          name: 'Kisumu',
          places: [
            { name: 'Lake victory ', slug: 'lake_victoria', img: '' },
            { name: 'Kisumu Natinal park', slug: 'kisumu_park', img: '' }
          ],
          img: 'kisumu.jpg'
        },
        {
          name: 'kajiado',
          places: [
            { name: 'Kiserian Dam Center', slug: 'kiserain_dam', img: '' },
            { name: 'Ngong Hills', slug: 'ngong_hills', img: '' }
          ],
          img: 'kajiado.jpg'
        }
      ]
    }
  },
  get_values (entity) {
    //
    return new Promise((resolve, reject) => {
      // get the values of the current
      const values = this.values.find(value => value.ename === entity)
      //
      // Return the found values if none was found alert back to the users.
      if (values) {
        // Find values matching the parent
        // values = values.map(val => val.parent === entity.parent)
        resolve(values)
      } else {
        reject(
          new Error(
            `Cannot find values for the given entity:Entity name ${entity}`
          )
        )
      }
    })
  }
}
