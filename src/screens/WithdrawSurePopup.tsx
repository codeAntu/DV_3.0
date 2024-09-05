export default function WithdrawSurePopup() {
  return (
    <div>
      <button id='addBankButton'>Add Bank</button>
      <div id='addBank' className='popOver gap-7'>
        <div className='w-full text-2xl font-semibold'>Are you sure want withdraw money through GV Groups?</div>

        <div className='w-full text-sm'>Bank Account</div>

        <div className='flex w-full flex-col items-center gap-10 px-5'>
          <div className='flex w-full items-center justify-between gap-2'>
            <div>
              <div className='text-xs text-black/50'>Bank (IFSC:HDFC0004244)</div>
              <div className='text-xl font-bold'>HDFC BANK</div>
            </div>
           
          </div>

          <div className='flex w-full items-center justify-between gap-2'>
            <div>
              <div className='text-xs text-black/50'>Bank (IFSC:HDFC0004244)</div>
              <div className='text-xl font-bold'>HDFC BANK</div>
            </div>
            <div className='text-right'>
              <div className='text-xs text-black/50'>Account Number</div>
              <div className='text-xl font-bold'>XXXX 2371</div>
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-between py-3 gap-4'>
        <button className='buttonRounded2 flex-grow' id='btn'>
            No
          </button>
          <button className='buttonRounded flex-grow' id='btn'>
            Yes
          </button>
        </div>
      </div>
      <div className='close' id='close'>
        Close
      </div>
    </div>
  )
}
