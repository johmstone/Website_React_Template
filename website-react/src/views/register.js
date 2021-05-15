/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useForm } from 'react-hook-form';

import Account from '../services/account';

export const Register = () => {
	const AccountSVC = new Account();

	const { register, formState: { errors }, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'all',
		defaultValues: {},
		resolver: undefined,
		context: undefined,
		criteriaMode: "firstError",
		shouldFocusError: true,
		shouldUnregister: false,
	});

	const onSubmit = data => {
		console.log(data);
	}

	return (
		<section className="container mw-90 my-5">
			<div className="card-contact mw-100 mx-auto bg-light p-3">
				<div className="text-center">
					<h2 className="mb-0 text-font-base">Registro</h2>
					<p className="text-font-base">Crea tu cuenta y forma parte de nuestra familia</p>
				</div>
				<article className="card-body mx-auto py-0">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group input-group m-0">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" className="form-control" placeholder="Nombre Completo" maxLength="30"
								{...register('firstName', {
									required: true
									, minLength: { value: 2, message: "Debe ser de al menos 2 caractéres!" }
									, pattern: { value: /^[a-zA-Z\s]+$/, message: "Debe contener solo letras!" }
								})} />
						</div>
						<div className="form-group mb-1">
							<label className={errors.firstName?.type === 'required' ? 'col label-alert text-font-base text-danger' : 'col label-alert text-font-base text-success'}>
								<i className={errors.firstName?.type === 'required' ? 'fa fa-times-circle' : 'fa fa-check-circle'}></i> Campo requerido!
                   			</label>
							{errors.firstName && errors.firstName.type === 'minLength' && (
								<label className="col label-alert text-font-base text-danger">
									<i className="fa fa-times-circle"></i> {errors?.firstName?.message}
								</label>
							)}
							{errors.firstName && errors.firstName.type === 'pattern' && (
								<label className="col label-alert text-font-base text-danger">
									<i className="fa fa-times-circle"></i> {errors?.firstName?.message}
								</label>
							)}
						</div>
						<div className="form-group input-group m-0">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-envelope"></i></span>
							</div>
							<input type="text" className="form-control" placeholder="Correo Electrónico" maxLength="30"
								{...register('Email', {
									required: true
									, minLength: { value: 2, message: "Debe ser de al menos 2 caractéres!" }
									, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Cuenta de correo Invalida!" }
									// ,validate: { available: v => AccountSVC.CheckEmailAvailability(v).then(res => {return res; })}
								})} />
						</div>
						<div className="form-group mb-1">
							<label className={errors.Email?.type === 'required' ? 'col label-alert text-font-base text-danger' : 'col label-alert text-font-base text-success'}>
								<i className={errors.Email?.type === 'required' ? 'fa fa-times-circle' : 'fa fa-check-circle'}></i> Campo requerido!
                   			</label>
							{errors.Email && errors.Email.type === 'minLength' && (
								<label className="col label-alert text-font-base text-danger">
									<i className="fa fa-times-circle"></i> {errors?.Email?.message}
								</label>
							)}
							{errors.Email && errors.Email.type === 'pattern' && (
								<label className="col label-alert text-font-base text-danger">
									<i className="fa fa-times-circle"></i> {errors?.Email?.message}
								</label>
							)}
							{/* {errors.Email && errors.Email.type === 'available' && (
								<label className="col label-alert text-font-base text-danger">
									<i className="fa fa-times-circle"></i> Este correo ya se encuentra registrado!
								</label>
							)} */}
						</div>

						<div className="form-group input-group m-0">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-lock"></i></span>
							</div>
							<input type="text" className="form-control" placeholder="Contraseña" maxLength="15"
								{...register('Password', {
									required: true
									, minLength: 8
									, maxLength: 15
									// ,validate: { 
									// 	hasSpaces: (value) => /^[a-zA-Z0-9]*$/.test(value) || "NO debe contener espacios!"
									// 	,hasCapitalCase: (value) => /[A-Z]/.test(value)
									// 	,hasNumber: (value) => /[0-9]/.test(value)
									//  }
								})}
							/>
						</div>
						<div className="form-group mb-1">
							<label className={errors.Password?.type === 'required' ? 'col label-alert text-font-base text-danger' : 'col label-alert text-font-base text-success'}>
								<i className={errors.Password?.type === 'required' ? 'fa fa-times-circle' : 'fa fa-check-circle'}></i> Campo requerido!
                   			</label>
							<label className={errors.Password?.type === 'minLength' ? 'col label-alert text-font-base text-danger' : 'col label-alert text-font-base text-success'}>
								<i className={errors.Password?.type === 'minLength' ? 'fa fa-times-circle' : 'fa fa-check-circle'}></i> Debe tener al menos 8 caractéres!
                   			</label>
							<label className={errors.Password?.type === 'maxLength' ? 'col label-alert text-font-base text-danger' : 'col label-alert text-font-base text-success'}>
								<i className={errors.Password?.type === 'maxLength' ? 'fa fa-times-circle' : 'fa fa-check-circle'}></i> Debe tener máximo 15 caractéres!
                   			</label>
							{/* <label className={errors.Password?.type === 'hasCapitalCase' ? 'col label-alert text-font-base text-danger' : 'col label-alert text-font-base text-success'}>
								<i className={errors.Password?.type === 'hasCapitalCase' ? 'fa fa-times-circle' : 'fa fa-check-circle'}></i> Debe tener al menos 1 MAYUSCULA!
                   			</label>
							<label className={errors.Password?.type === 'hasNumber' ? 'col label-alert text-font-base text-danger' : 'col label-alert text-font-base text-success'}>
								<i className={errors.Password?.type === 'hasNumber' ? 'fa fa-times-circle' : 'fa fa-check-circle'}></i> Debe tener al menos 1 número!
                   			</label>
							{errors.Password && errors.Password.type === 'hasSpaces' && (
								<label className="col label-alert text-font-base text-danger">
									<i className="fa fa-times-circle"></i> {errors?.Password?.message}
								</label>
							)} */}
						</div>
						<div className="form-group input-group m-0">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-lock"></i></span>
							</div>
							<input type="Password" id="ConfirmPwd" className="form-control" placeholder="Repetir Contraseña" />
						</div>

						<div className="form-group text-center">
							<button className="btn btn-outline-primary text-font-base btn-block">
								<div className="spinner-border spinner-border-sm align-middle" role="status">
									<span className="sr-only">Loading...</span>
								</div>
								Crear Cuenta
                     		</button >
						</div >
						<div className="form-group text-center">
							<p className="m-0">
								Tienes una cuenta? <a className="text-center">Ingresar</a>
							</p>
						</div>
					</form>
				</article>
			</div>
		</section>
	)
};
