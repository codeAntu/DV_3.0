export default function MyFamily() {
  return (
    <div className='component flex justify-center'>
      <div className='maxWidth flexCol gap-5 '>
        <div className='header'>My Family</div>
        <div className='flexCol gap-5'>
          <div className='card gap-1.5 p-3'>
            <div className='contentHeader flex justify-between '>
              <div className=''>0</div>
              <div>₹0.00</div>
            </div>
            <div className='contentText flex justify-between '>
              <div>Total Member</div>
              <div>Total Profit</div>
            </div>
          </div>
         
        </div>
        
        <div className='flex flex-col gap-2.5 pt-5'>
          <div className='member'>
            <img src='./icons/member.svg ' alt='' className='memberIcon' />
            <div>Code Antu</div>
          </div>
          <div className='member'>
            <img src='./icons/member.svg ' alt='' className='memberIcon' />
            <div>Code Antu</div>
          </div>
          <div className='member'>
            <img src='./icons/member.svg ' alt='' className='memberIcon' />
            <div>Code Antu</div>
          </div>
        </div>
      </div>
    </div>
  )
}
