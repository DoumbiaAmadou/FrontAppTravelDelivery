import React, { useState } from 'react';

const SignUp = () => {

  let [user, setUser] = useState({
    "email": "",
    "name": "",
    "firstName": "",
    "city": "",
    "cellphone": "",
    'password': '',
    'confirmePassword': '',
    'confirmeAgreement': ''
  })

  let handleSubmit= (event)=>{
    event.preventDefault();
    console.log(JSON.stringify(user))
  }

  let handleChange = (event) => {
    event.preventDefault()
    console.log(event.target ,  event.target.value)
    setUser({...user ,...{[event.target.name]: event.target.value} })
  }
  return (
    <div className='container'>
      <section className="vh-100" >
        <div className="container h-75">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ 'borderRadius': '25px' }}>
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">S'inscrire! </p>

                      <form className="mx-1 mx-md-4" onSubmit={(event) => {
                        event.preventDefault();
                        console.log('submit')
                      }}>
                        <div className="form-floating mb-3">
                          <input type="text" name="firstName" id="form3Example1c" className="form-control" onChange={handleChange} value={user.firstName} placeholder="Votre Prenom:" />
                          <label className="form-label" htmlFor="form3Example1c">Votre Prenom:</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="text" id="form3Example2c" className="form-control"  name="name" onChange={handleChange} value={user.name} placeholder="Votre Nom:" />
                          <label className="form-label" htmlFor="form3Example2c">Votre Nom:</label>
                        </div>

                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="fliEmail" name="email" onChange={handleChange} value={user.email} placeholder='exemple@exemple.com' />
                          <label htmlFor="fliEmail">Email :</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="text" id="form3City1c" className="form-control" name="city" onChange={handleChange}  value={user.city} placeholder="Ville:" />
                          <label className="form-label" htmlFor="form3City1c">Ville:</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="text" id="form3Phone1c" className="form-control" name="cellphone" onChange={handleChange}  value={user.cellphone} placeholder="Téléphone:" />
                          <label className="form-label" htmlFor="form3Phone1c">Téléphone:</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="password" className="form-control" id="floatingPassword" name="password" onChange={handleChange} value={user.password} placeholder='Password' />
                          <label htmlFor="floatingPassword">Mot de passe</label>
                        </div>


                        <div className="form-floating mb-3">
                          <input type="password" id="form3Example4cd" className="form-control" name="confirmePassword" onChange={handleChange} value={user.confirmePasseword} placeholder='Repeat your password' />
                          <label className="form-label" htmlFor="form3Example4cd">Confirmer votre mot de passe</label>

                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <label>
                            <input type="checkbox" className="filled-in" id="form2Example3c" name="confirmeAgreement" onChange={handleChange} />
                            <span>   I agree all statements in <a href="#!">Terms of service</a></span>
                          </label>
                        </div>
                        <div className="cd-flex flex-row">
                          <button className="btn waves-effect waves-light" type="submit"  onChange={handleSubmit} >S'inscrire
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample " />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </div >

  )
}

export default SignUp; 
