Class ApiError extends Error{

  constructor(
    statusCode,
    message="Something wrong",
    errors=[],
    stack=""
  ){
    super(message) // super(message) calls the constructor of the parent Error class with the message parameter. This    sets the error message that will be displayed.
    this.statusCode=statusCode
    this.data=null
    this.message=message;
    this.sucess=false,
    this.error=errors

    if (statck){
      this.stack=statck
    }
    else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
  export{
    ApiError
  }
}