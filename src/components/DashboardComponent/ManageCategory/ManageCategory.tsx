import React, { useEffect, useState } from 'react';
import "../dashboard.css";
import Shower from "../../../assets/shower.png"

const initialState = {
  id: 0,
  facility: ""
}

interface editType {
  id: number,
  facility: string
}
const ManageCategory = () => {

  const [isFormVisible, setIsFormVisible] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const [editData, setEditData] = useState<editType | null>(null)
  const [data, setData] = useState([
    {
      id: 1,
      facility: "Nail Cutting"
    },
    {
      id: 2,
      facility: "Training"
    }
  ])

  useEffect(() => {
    if (editData) {
      setFormData({ ...editData, id: Math.random() * 60 })
    }

  }, [editData])


  const addHandler = () => {
    setIsFormVisible(!isFormVisible)
    const { facility } = formData;
    if (editData) {
      const findPosition = data.findIndex((item) => {
        return item.id == editData.id
      })
      const updateData = data.splice(findPosition, 1, formData)
    } else {
      if (isFormVisible && facility) {
        setData([...data, { ...formData, id: Math.random() * 60 }])
        setFormData(initialState)
      }
    }
    setEditData(null)
  }

  const deleteHandle = (id: number) => {
    setData([...data.filter((item) => {
      return item.id !== id
    })])

  }

  const editHandle = (id: number) => {
    const singleObject = data.find((item) => {
      return item.id == id
    })
    console.log(singleObject, "---")
    setEditData(singleObject as unknown as editType)
    setIsFormVisible(true)
  }
  const chnageHandler = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }
  return (
    <>
      <div className='main_form'>
        {
          isFormVisible && (
            <>
              <div className='form_container'>
                <form>
                  <input type='text' placeholder='facility' name='facility' value={formData.facility} onChange={chnageHandler} />
                </form>
              </div>
            </>
          )
        }

        <div className='button_container'>
          <span className='button' onClick={addHandler}> {editData ? "Edit Facility" : "Add New Facility"}</span>
        </div>

      </div>

      <div className='facility_container'>
        <div className='facility_sub_container'>
          <div className='facility_header'>
            <div>Avtar</div>
            <div>Facility</div>
            <div>Action</div>
          </div>
          {
            data.map((item) => {
              return (
                <>
                  <div className='facility_header' key={item.id}>
                    <div><img src={Shower} width={30} height={30} /></div>
                    <div>{item?.facility}</div>
                    <div><span className='edit_btn' onClick={() => editHandle(item.id)}>Edit</span> <span className='delete_btn' onClick={() => deleteHandle(item?.id)}>Delete</span> </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default ManageCategory;
