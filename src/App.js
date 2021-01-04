import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
 
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';



const App = () => {
	
	// Data
	const usersData = [
		{ id: 1, name: 'Envoyer un email', username: 'A tout equipe' },
		{ id: 2, name: 'faire exercice', username: 'react only' },
	
	]

	const initialFormState = { id: null, name: '', username: ''}

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
		
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			 <BrowserRouter>
        <div>
		<h3></h3> 
          <div className="header">
		  <NavLink  to="">To do list</NavLink>
		    <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small></small>
            <NavLink activeClassName="active" to="/dashboard">Taches</NavLink><small></small>
			
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
		
			<div className="flex-row">

				<div className="flex-large">
					<h2>Liste des taches</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>

        <div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit tache</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Créer une nouvelle tache</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
			</div>
		</div>
	)
}

export default App