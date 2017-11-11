/**
 * Event Store
 *
 * TODO: Make it real.
 *
 * @author mtownsend
 * @since Oct 2017
 */

const fakeDepartments = [{
  name: 'Safety',
  lead: {
    name: 'Pinchy McPinchface',
    avatar: 'pinchy.jpg'
  },
  teams: [{
    name: 'Fire Art Safety Team',
    roles: [{
      name: 'Dirt',
      minShifts: 20,
      maxShifts: 22,
      filledShifts: 5
    }, {
      name: 'OOD',
      minShifts: 5,
      maxShifts: 10,
      filledShifts: 3
    }, {
      name: 'Lead',
      minShifts: 1,
      maxShifts: 2,
      filledShifts: 1
    }]
  }, {
    name: 'First Aid Team',
    roles: [{
      name: 'Dirt',
      minShifts: 20,
      maxShifts: 22,
      filledShifts: 18
    }, {
      name: 'OOD',
      minShifts: 5,
      maxShifts: 10,
      filledShifts: 7
    }, {
      name: 'Lead',
      minShifts: 1,
      maxShifts: 2,
      filledShifts: 2
    }]
  }]
}, {
  name: 'City',
  lead: {
    name: 'Pinchy McPinchface',
    avatar: 'pinchy.jpg'
  },
  teams: [{
    name: 'Department of Public Works',
    roles: [{
      name: 'Dirt',
      minShifts: 20,
      maxShifts: 22,
      filledShifts: 5
    }, {
      name: 'OOD',
      minShifts: 5,
      maxShifts: 10,
      filledShifts: 3
    }, {
      name: 'Lead',
      minShifts: 1,
      maxShifts: 2,
      filledShifts: 1
    }]
  }, {
    name: 'Placement',
    roles: [{
      name: 'Dirt',
      minShifts: 20,
      maxShifts: 22,
      filledShifts: 5
    }, {
      name: 'OOD',
      minShifts: 5,
      maxShifts: 10,
      filledShifts: 3
    }, {
      name: 'Lead',
      minShifts: 1,
      maxShifts: 2,
      filledShifts: 1
    }]
  }, {
    name: 'Leave No Trace',
    roles: [{
      name: 'Dirt',
      minShifts: 20,
      maxShifts: 22,
      filledShifts: 5
    }, {
      name: 'OOD',
      minShifts: 5,
      maxShifts: 10,
      filledShifts: 3
    }, {
      name: 'Lead',
      minShifts: 1,
      maxShifts: 2,
      filledShifts: 1
    }]
  }]
}, {
  name: 'Art',
  lead: {
    name: 'Pinchy McPinchface',
    avatar: 'pinchy.jpg'
  },
  teams: [{
    name: 'Department of Public Works',
    roles: [{
      name: 'Dirt',
      minShifts: 20,
      maxShifts: 22,
      filledShifts: 5
    }, {
      name: 'OOD',
      minShifts: 5,
      maxShifts: 10,
      filledShifts: 3
    }, {
      name: 'Lead',
      minShifts: 1,
      maxShifts: 2,
      filledShifts: 1
    }]
  }, {
    name: 'Placement',
    roles: [{
      name: 'Dirt',
      minShifts: 20,
      maxShifts: 22,
      filledShifts: 5
    }, {
      name: 'OOD',
      minShifts: 5,
      maxShifts: 10,
      filledShifts: 3
    }, {
      name: 'Lead',
      minShifts: 1,
      maxShifts: 2,
      filledShifts: 1
    }]
  }, {
    name: 'Leave No Trace',
    roles: [{
      name: 'Dirt',
      minShifts: 20,
      maxShifts: 22,
      filledShifts: 5
    }, {
      name: 'OOD',
      minShifts: 5,
      maxShifts: 10,
      filledShifts: 3
    }, {
      name: 'Lead',
      minShifts: 1,
      maxShifts: 2,
      filledShifts: 1
    }]
  }]
}];

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
    photo: 'firefly.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    departments: fakeDepartments,
    lead: {
      name: 'Pinchy McPinchface',
      avatar: 'pinchy.jpg'
    }
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
    photo: 'hrpdrp.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    departments: fakeDepartments,
    lead: {
      name: 'Pinchy McPinchface',
      avatar: 'pinchy.jpg'
    }
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
    photo: 'decomp.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    departments: fakeDepartments,
    lead: {
      name: 'Pinchy McPinchface',
      avatar: 'pinchy.jpg'
    }
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

