import React from 'react'

const UserTable = props => (
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Nom du la tache</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                class="btn btn-success"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No taches</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable