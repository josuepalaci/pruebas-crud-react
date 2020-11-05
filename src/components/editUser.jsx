import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {
    
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.current
    });

    setValue('name', props.current.name);
    setValue('username', props.current.username);

    const onSubmit = (data, e)=>{
        // console.log(data);
        data.id = props.current.id;
        props.updateUser(props.current.id,data);
        e.target.reset();
    };
    
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name"
                ref={
                    register({required: {value: true, message: 'Campo requerido'}})
                }
            />
            <div>
                {errors?.name?.message}
            </div>
            <label>UserName</label>
            <input type="text" name="username"
                ref={
                    register(
                        {required: {value: true, message: 'Campo requerido'}}
                        )
                    }
            />
            <div>
                {errors?.username?.message}
            </div>
            <button type="submit">Edit User</button>
        </form>
    );
}
 
export default EditUserForm;