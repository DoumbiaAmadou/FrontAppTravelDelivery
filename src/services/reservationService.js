const BaseUrl = 'http://localhost:3000/reservation';

// reservation
/**
 * reservation
 * @param { tripId, kilosReserved, date_Res, name, firstName, user } 
 * @returns void
 */
let postReservation = async (reservation) => {
  let auth = JSON.parse(localStorage.getItem('AUTH'));
  if (!auth.user)
    return {
      status: 'UNCONNECTED',
      message: 'You should conned to post reservation'
    }
  let {
    _id,
    name,
    firstName
  } = auth.user;

  reservation = {
    ...reservation,
    user: _id,
    name,
    firstName,
  }

  console.log('==>', reservation)
  let res = await fetch(BaseUrl, {
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