export default function WithdrawPopup() {
  return (
    <div>
      <button id='addBankButton'>Click</button>
      <div id='addBank' className='popOver gap-7'>
        <div className='w-full text-center text-2xl font-semibold'>Withdraw from DV Groups</div>

        <div className='flex w-full flex-col items-center gap-5'>
          <div className='flex w-full items-center justify-between gap-2'>
            <div className='text-xl'>Withdraw</div>
            <input
              type='text'
              className='w-5/12 border-b-2 border-accent bg-accent/10 px-3 py-2 text-right text-2xl font-semibold outline-none placeholder:text-lg placeholder:font-semibold'
              placeholder='Amount'
            />
          </div>
          <hr className='w-full border-t border-dashed border-accent' />

          <div className='flex w-full items-center justify-between gap-2'>
            <div className='text-xl'>Max. Amount</div>
            <div className='w-1/2 border-b-2 border-transparent px-3 py-2 text-right text-2xl font-semibold'>
              ₹5,000
            </div>
          </div>
          <hr className='w-full border-t border-dashed border-accent' />
        </div>
        <div className='px-5 grid gap-3 py-2'>
          <div className="w-1">
            <svg width='19' height='15' viewBox='0 0 19 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.264 7.24L13.912 0.839996H18.328L15.384 7.24H17.624L16.92 14.216H9.56L10.264 7.24ZM0.92 14.216L1.624 7.24L5.272 0.839996H9.688L6.744 7.24H8.984L8.28 14.216H0.92Z'
                fill='#345AFB'
              />
            </svg>
          </div>
          Earn up to ₹1000 annually when you stay invested
        </div>
        <div className='flex w-full items-center justify-center py-3'>
          <button className='button rounded-full' id='btn'>
            Withdraw Money
          </button>
        </div>
      </div>
      <div className='close' id='close'>
        Close
      </div>
    </div>
  )
}
