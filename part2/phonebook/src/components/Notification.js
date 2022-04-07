const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  const notificationStyle = {
    border: 'solid 3px',
    padding: 20,
    borderRadius: 3,
    textAlign: 'center'
  }

  return (
    <div style={notificationStyle} className='message'>
      {message}
    </div>
  )
}

export default Notification