
// reservation
/**
 * reservation
 * @param { tripId, kilosReserved, date_Res, name, firstName, user } 
 * @returns void
 */
let postReservation = async (reservation) => {
  let auth = JSON.parse(localStorage.getItem('AUTH'));
  if (!auth || !auth.user)
    return {
      status: 'UNCONNECTED',
      message: 'You should conned to post reservation'
    }
  let {
    userId,
    name,
    firstName
  } = auth.user;

  reservation = {
    ...reservation,
    user: userId,
    name,
    firstName,
  }
  //{ tripId, kilosReserved, date_Res, name, firstName, user }
  console.log(' ==>', reservation);
  let res = await fetch(process.env.REACT_APP_BACKENDURL + 'reservation', {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + auth.user.token
    },
    body: JSON.stringify(reservation)
  });

  if (!res.ok) {
    console.log(res);
    console.error(res);
    return {
      ...res,
      'status': 'KO'
    }
  }
  let result = await res.json();
  console.log('res json=>', result);
  return {
    ...result,
    'status': 'OK'
  }
}

export {
  postReservation
};