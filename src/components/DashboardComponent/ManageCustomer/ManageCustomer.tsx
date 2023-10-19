import React, { useEffect, useState } from 'react';
import "../dashboard.css";


interface dataType {
    id: number;
    name: string;
    email: string;
    pet: string;
}
const initialState = {
    id: 0,
    name: "",
    email: "",
    pet: ""
}
const ManageCustomer = () => {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [formData, setFormData] = useState<dataType>(initialState)
    const [editData, setEditData] = useState<dataType | null>(null)

// state for array 
    const [data, setData] = useState<Array<dataType>>([
        {
            id: 1,
            name: "johan",
            email: "johan@gmail.com",
            pet: "Dog"
        }
    ])

// input change handler
    const chnageHandler = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

// Add new entry 
    const addHandler = () => {
        setIsFormVisible(!isFormVisible)
        const { name, email, pet } = formData;
        if(editData){
            const findPosition = data.findIndex((item) => {
                return item.id == editData.id
              })
              const updateData = data.splice(findPosition, 1, formData)
              setFormData(initialState)
              setEditData(null)
        }else{
            if (isFormVisible && name && email && pet) {
                setData([...data, { ...formData, id: Math.random() * 60 }])
                setFormData(initialState)
            }
        }
     
    }

// edit handler 
    const editHandler = (id: number) => {
        const singleObject = data.find((item) => {
          return item.id == id
        })
        setEditData(singleObject as unknown as dataType)
        setIsFormVisible(true)
      }

      useEffect(()=>{
        if(editData){
            setFormData(editData)
        }
      },[editData])

// Delete Handler
    const deleteHandler =(id:number)=>{
        setData([...data.filter((item)=>{
            return item.id != id
        })])
    }

    return (
        <div>
            <div className='main_form'>
                {
                    isFormVisible && (
                        <>
                            <div className='form_container'>
                                <form>
                                    <input type='text' placeholder='name' name='name' value={formData.name} onChange={chnageHandler} />
                                    <input type='text' placeholder='email' name='email' value={formData.email} onChange={chnageHandler} />
                                    <input type='text' placeholder='petname' name='pet' value={formData.pet} onChange={chnageHandler} />
                                </form>
                            </div>
                        </>
                    )
                }

                <div className='button_container'>
                    <span className='button' onClick={addHandler}> {editData ? "Edit Customer" : "Add New Customer" }</span>
                </div>

            </div>
            <div className='facility_container'>
                <div className='facility_sub_container'>
                    <div className='facility_header'>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Pet Name</div>
                        <div>Action</div>
                    </div>
                    {
                        data.map((item) => {
                            return (
                                    <div className='facility_header' key={item.id}>
                                        <div>{item?.name}</div>
                                        <div>{item?.email}</div>
                                        <div>{item?.pet}</div>
                                        <div className='combine_btn'><span onClick={()=>editHandler(item.id)} className='edit_btn'>Edit</span> <span className='delete_btn' onClick={()=> deleteHandler(item.id)}>Delete</span> </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
    );
}

export default ManageCustomer;
