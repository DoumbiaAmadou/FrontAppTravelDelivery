import React from 'react' ;

const Login = ()  => {
  return (
    <div className='container'>
    <section className="vh-100" >
      <div className="container h-50">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ 'borderRadius': '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Se connecter!</p>

                    <form className="mx-1 mx-md-4">
                      <div className=" form-floating mb-3 ">
                      <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input type="email" className="form-control" id="fliEmail"  placeholder="Email:" />
                        {/* <label htmlFor="fliEmail">Email :</label> */}
                      </div>
                      </div>

                      <div className="form-floating mb-5 mb-3">
                      <div className="input-field">
                        <i className="material-icons prefix">lock</i>
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Mot de passe:"  />
                        {/* <label htmlFor="floatingPassword">Mot de passe</label> */}
                      </div>
                      </div>

                      <div className="form-floating d-flex flex-row justify-content-center">
                        <button className="btn waves-effect waves-light" type="submit" >Se connecter
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

export default Login ; 
