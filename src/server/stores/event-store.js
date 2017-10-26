/**
 * Event Store
 *
 * TODO: Make it real.
 *
 * @author mtownsend
 * @since Oct 2017
 */
const fakeStore = {
  0: {
    id: 0,
    active: false,
    name: 'Firefly 2017',
    numDepartments: 4,
    numVolunteers: 12304,
    startDate: new Date(2017, 8, 18, 12),
    endDate: new Date(2017, 8, 23, 12),
    address: '123 Christian Hill Drive',
    photo: 'firefly.png'
  },
  1: {
    id: 1,
    active: true,
    name: 'Hyperborea 2018',
    numDepartments: 4,
    numVolunteers: 12304,
    startDate: new Date(2018, 8, 18, 12),
    endDate: new Date(2018, 8, 23, 12),
    address: '123 Christian Hill Drive',
    photo: 'hrpdrp.png'
  },
  2: {
    id: 2,
    active: true,
    name: 'Decomp 2018',
    numDepartments: 4,
    numVolunteers: 12304,
    startDate: new Date(2018, 8, 18, 12),
    endDate: new Date(2018, 8, 23, 12),
    address: '123 Christian Hill Drive',
    photo: 'decomp.png'
  }
};

export function get(id) {

  return new Promise(resolve => {
    if (id == null) {
      // Return all summaries
      resolve(Object.assign({}, fakeStore));
    }

    // TODO: Return event details?
    resolve(fakeStore[id]);
  });
}

