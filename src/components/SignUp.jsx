
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router-dom";
import { validationSchema } from './validation'
import { createNewUser } from '../services/userService'
import { useState } from "react";

const SignUp = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  let history = useHistory();
  let [result, setResult] = useState('');

  const onSubmit = async (data) => {

    console.log('submit')
    const { cellphone, city, password, name, firstName, email } = data;
    console.log({ cellphone, city, password, name, firstName, email });
    let res = await createNewUser({ cellphone, city, password, name, firstName, email })
      
      console.log('ssss', res)
      if (res.status === 'OK') {

        setResult('utilisateur crée avec succes');
        reset();
        history.push('/login');
      }
      setResult('un problème interne est survenu veillez réessayer plutard s\'il vous plait');
    };

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

                        <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">Bienvenue sur la page d'incription!  </p>
                        <p className="text-center h5 fw-bold mb-5 mx-1 mx-md-4 mt-4"> {result} </p>

                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-floating mb-3">
                            <input type="text" name="firstName" id="form3Example1c" className="form-control" 	{...register("firstName")} placeholder="Votre Prenom:" />
                            <label className="form-label" htmlFor="form3Example1c">Votre Prenom:</label>
                            <small className="text-danger d-block">
                              {errors.firstName?.message}
                            </small>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="text" id="form3Example2c" className="form-control" name="name" {...register("name")} placeholder="Votre Nom:" />
                            <label className="form-label" htmlFor="form3Example2c">Votre Nom:</label>
                            <small className="text-danger d-block">
                              {errors.name?.message}
                            </small>
                          </div>

                          <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="fliEmail" name="email" {...register("email")} placeholder='exemple@exemple.com' />
                            <label htmlFor="fliEmail">Email :</label>
                            <small className="text-danger d-block">
                              {errors.city?.message}
                            </small>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="text" id="form3City1c" className="form-control" name="city" {...register("city")} placeholder="Ville:" />
                            <label className="form-label" htmlFor="form3City1c">Ville:</label>
                            <small className="text-danger d-block">
                              {errors.city?.message}
                            </small>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="text" id="form3Phone1c" className="form-control" name="cellphone" {...register("cellphone")} placeholder="Téléphone:" />
                            <label className="form-label" htmlFor="form3Phone1c">Téléphone:</label>
                            <small className="text-danger d-block">
                              {errors.cellphone?.message}
                            </small>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" name="password" {...register("password")} placeholder='Password' />

                            <label htmlFor="floatingPassword">Mot de passe</label>
                            <small className="text-danger d-block">
                              {errors.password?.message}
                            </small>
                          </div>


                          <div className="form-floating mb-3">
                            <input type="password" id="form3Example4cd" className="form-control" name="confirmePassword" {...register("confirmPassword")} placeholder='Repeat your password' />
                            <label className="form-label" htmlFor="form3Example4cd">Confirmer votre mot de passe</label>
                            <small className="text-danger d-block">
                              {errors.confirmPassword?.message}
                            </small>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <label>
                              <input type="checkbox" className="filled-in" id="form2Example3c" name="acceptTerms" {...register("acceptTerms")} />
                              <span>   I agree all statements in <a href="#!">Terms of service</a></span>
                              <small className="text-danger d-block">
                                {errors.acceptTerms?.message}
                              </small>
                            </label>
                          </div>
                          <div className="cd-flex flex-row">
                            <button className="btn waves-effect waves-light" type="submit" >S'inscrire </button>
                            <button className="btn waves-effect waves-light" type="button" onClick={() => reset()} >Annuler</button>
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
