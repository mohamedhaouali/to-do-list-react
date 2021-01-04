import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Nom de la tache</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Description du la tache en une seule ligne</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button class="btn btn-primary mb-3">Ajouter la tache</button>
		</form>
	)
}

export default AddUserForm