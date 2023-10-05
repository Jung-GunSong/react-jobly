

function ErrorMessage({errorMessages}){

  return(
    <div>
      {errorMessages.map(message => <p key={message.id}>{message.text}</p>)}
    </div>
  )
}

export default ErrorMessage;