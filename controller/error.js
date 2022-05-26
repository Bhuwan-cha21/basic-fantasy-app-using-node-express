exports.checkError = ( error) =>{
    const errors = {
        firstname : '',
        lastname : '',
        email : ''
     }
      if(error.message.includes("User validation failed")){
          Object.values(error.errors).forEach((err) =>{
             errors[err.path] = err.message
          })
      }
      return errors
}