import { useState } from "react";

  
const FormWithoutYup = () => {
const handleSubmit= () =>{};

const [formData,updatedFormData]=useState({
  firstName :"",
  lastName :"",
  email:"",
  phone:"",
  password:"",
  confirmpassword:"",
  age:"",
  gender:"",
  intersts:[],
  birthdate:""

})
   return (
     <form onSubmit={handleSubmit}>

       <div>
        <label htmlFor="">First Name: </label>
      
        <input type="text"  
         name="firstName"
         value={formData.firstName}
         placeholder="Enter your first name"/>    
      </div> 

      <div>
      <label htmlFor="">Last Name: </label>
      <input type="text"  
      name="lastName"
      value={formData.lastName}
      placeholder="Enter your last name" />
      </div>

      <div>
      <label htmlFor="">Email: </label>
      <input type="email"  
      name="email"
      value={formData.email}
      placeholder="Enter your first email" />
      </div>

      <div>
      <label htmlFor="">Phone Number: </label>
      <input type="phone"  
      name="phone"
      value={formData.phone}
      placeholder="Enter your phone number" />
      </div>
    
      <div>
      <label htmlFor="">Password: </label>
      <input type="password"  
      name="password"
      value={formData.password}
      placeholder="Enter your password" />
      </div>

      <div>
      <label htmlFor="">Confirm Password: </label>
      <input type="password"  
      name="confirmpassword"
      value={formData.confirmpassword}
      placeholder="Enter password again" />
      </div>

      <div>
      <label htmlFor=""> Age: </label>
      <input type="number"  
      name="age"
      value={formData.age}
      placeholder="Enter your age" />
      </div>

      <div>
      <label htmlFor=""> Gender: </label>
      <select name="gender" value={formData.gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      
       
      </div>
      <div>
        <label htmlFor="">Intersts: </label>
        <label htmlFor="">
          <input
          type="checkbox"
          name="coding"
          value={formData.intersts.includes('coding')} />
          Coding
        </label>

        <label htmlFor="">
          <input type="checkbox"
          name="sports"
          value={formData.intersts.includes('sports')} />
          Sports
        </label>
        <label htmlFor="">
          <input type="checkbox"
          name="music"
          value={formData.intersts.includes('music')} />
          Sports
        </label>
        <div>
          <label htmlFor="">Date of Birth: </label>
          <input type="date" name="birthdate" value={formData.birthdate} placeholder="Enter Your Date of Birth"/>
         </div>
         <div>
          <input type="submit"   name="Submit" id="Submit" />
         </div>

      </div>




      
      
 
     </form>
   )
 }
 
 export default FormWithoutYup