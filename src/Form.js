import React from 'react'
import { useForm } from "react-hook-form";


export default function Form() {
    const { register, formState: {errors}, handleSubmit, clearErrors} = useForm();
    const handleError = (value) =>{
        if(value.legnth > 5){
            return  (<h4>valor mayor a 5</h4>)
        }
        
        if(!value){
            return errors.name.message = "ingrese un valor"

        }return true;
    
    }
    const showError = () => console.log(errors);
    const onSubmit = (data) => {
        
        console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                id="name"
                {...register("name", { validate: handleError })}/>
                
                

                <label htmlFor="email">email</label>
                <input 
                type="text"
                id="email"
                {...register("email", { required: true})}/>
                {errors.email && <h4>ingrese un email</h4>}
                <button type="submit" onClick={showError}>Send</button>
                
            </form>         
        </div>
    )
}
