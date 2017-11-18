import NullableObject from '../NullableObject';

/**
 * Team Store
 * TODO: Make it real
 *
 * @author mtownsend
 * @since Nov 2017
 */

const fakeStore = {
  0: {
    id: 0,
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
  },
  1: {
    id: 1,
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
  },
  2: {
    id: 2,
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
  }
};

function getEvent(eventId) {
  return NullableObject(fakeStore);
}

/**
 * Returns all departments for an event
 * @param eventId {number} The id of the event to query
 * @returns {Promise<Array.<*>>} A Promise of a list of the event's departments
 */
export function getAll(eventId) {
  return Promise.resolve(Object.keys(fakeStore).map(k => fakeStore[k]));
}

/**
 * Returns a specific department
 * @param eventId {number} The id of the event to query
 * @param departmentId {number} The id of the department to retrieve
 * @returns {Promise<object>} A Promise of the requested department, or undefined if it doesn't exist
 */
export function get(eventId, departmentId) {
  return Promise.resolve(getEvent(eventId).get(departmentId));
}