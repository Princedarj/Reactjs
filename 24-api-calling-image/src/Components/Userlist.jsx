import React from 'react'
import { SquarePen, UserRoundX } from 'lucide-react'

const Userlist = ({
  data,
  popup,
  setPopup,
  selectId,
  setSelectId,
  handleEdit,
  handleDeleteSelected
}) => {

  // CHECKBOX
  const handleCheckboxChange = (id) => {
    setSelectId(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <>
      {/* POPUP */}
      {popup.show && (
        <div className='popup'>
          {popup.message}

          {popup.onConfirm ? (
            <div className='dbg'>
              <button
                className='dbtn1'
                onClick={() => popup.onConfirm()}
              >
                YES
              </button>

              <button
                className='dbtn2'
                onClick={() =>
                  setPopup({ show: false, message: "", onConfirm: null })
                }
              >
                NO
              </button>
            </div>
          ) : null}
        </div>
      )}

      {/* TABLE */}
      <div className='bottom'>
        <div className='table'>

          <table className='custom-table'>
            <thead className='thead'>
              <tr>
                <th>Select</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>
                  Action
                  <button
                    className='usercancel'
                    onClick={handleDeleteSelected}
                    disabled={selectId.length === 0}
                  >
                    <UserRoundX strokeWidth={1.75} />
                  </button>
                </th>
              </tr>
            </thead>

            <tbody className='tbody'>
              {data.map((user) => (
                <tr key={user.id}>

                  <td>
                    <input
                      className='check'
                      type="checkbox"
                      checked={selectId.includes(user.id)}
                      onChange={() => handleCheckboxChange(user.id)}
                    />
                  </td>

                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td>
                    <button
                      className='editbtn'
                      onClick={() => handleEdit(user)}
                    >
                      <SquarePen strokeWidth={1.75} />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </>
  )
}

export default Userlist