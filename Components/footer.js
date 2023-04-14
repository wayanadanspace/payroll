const Footer = () => {

    const footer = {
        footer: {
            position: 'fixed',
            bottom: '0',
            width: '1400px',
            textAlign: 'center',
            background: 'white',
            marginBbottom: '5px', 
        }
    }
  return (
    <div>
        <div className='text-center' style={footer.footer}>
        Copyright © 2022 AMAZE ONE. All Rights Reserved    
        </div>
        </div>
    
  )
}

export default Footer