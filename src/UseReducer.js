import React, { useEffect, useReducer, Fragment } from 'react'

const SECURITY_CODE = 'paradigma'
const initialState = {
	value: '',
	loading: false,
	error: false,
	deleted: false,
	confirmed: false,
}

const actionTypes ={
    confirm: 'confirm',
    error:'error',
    deleted:'delet',
    write:'write',
    reset:'reset',
    check:'check',
}

const reducer = (state, action) => {
	switch (action.type) {
		case [actionTypes.error]:
			return {
				...state,
				error: true,
				loading: false,
			}
		case [actionTypes.confirm]:
			return {
				...state,
				loading: false,
				error: false,
				confirmed: true,
			}
		case [ actionTypes.write]:
			return {
				...state,
				value: action.payload,
			}
		case [ actionTypes.check]:
			return {
				...state,
				loading: true,
				error: false,
			}
		case [actionTypes.deleted]:
			return {
				...state,
				deleted: true,
			}
		case [actionTypes.reset]:
			return {
				...state,
				value: '',
				confirmed: false,
				deleted: false,
			}
		default:
			return {
				...state,
			}
	}
}

export default function UseReducer() {
	const [ state, dispatch ] = useReducer(reducer, initialState)
       const onConfirm = () =>{
        setState({
            ...state,
            error:false,
            loading: false,
            confirmed:true,
        });
    };

    const onError = () =>{
        setState({
            ...state,
            error:true,
            loading: false,
        });
    };

    const onWarite = (newValue) =>{
        setState({
            ...state,
            value: newValue,
        });
    };

    const onCheck = ()=>{
        setState({
            ...state,
            loading: true,
        });
    };
    const onDelete = () =>{
        setState({
            ...state,
            deleted:true,
        });
    };

    const onReset= () =>{
        setState({
            ...state,
            confirmed:false,
            deleted:false,
            value:'',
        });
    }

	useEffect(
		() => {
			if (state.loading) {
				setTimeout(() => {
					if (state.value === SECURITY_CODE) {
						dispatch({ type: actionTypes.confirm })
					} else {
						dispatch({ type: actionTypes.error })
					}
				}, 1000)
			}
		},
		[ state.loading ]
	)

	if (!state.deleted && !state.confirmed) {
		return (
			<div>
				<h2>Eliminar UseReducer</h2>
				<p>Por favor, escriba el código de seguridad.</p>
				{state.loading ? 'Cargando...' : state.error ? 'Error :(' : null}
				<br />
				<input
					type='text'
					placeholder='código de seguridad'
					value={state.value}
					onChange={ev => dispatch({ type: actionTypes.write, payload: ev.target.value })}
				/>
				<button
					onClick={() => {
						dispatch({ type: actionTypes.check })
					}}
				>
					Comprobar
				</button>
			</div>
		)
	} else if (!state.deleted && state.confirmed) {
		return (
			<Fragment>
				<p>Pedimos confirmación. ¿Tas seguro?</p>
				<button onClick={() => dispatch({ type: actionTypes.deleted })}>Si, eliminar</button>
				<button onClick={() => dispatch({ type: actionTypes.reset })}>No, me arrepentí</button>
			</Fragment>
		)
	} else {
		return (
			<Fragment>
				<p>Eliminado con éxito</p>
				<button onClick={() => dispatch({ type:actionTypes.reset })}>Regresar</button>
			</Fragment>
		)
	}
}
