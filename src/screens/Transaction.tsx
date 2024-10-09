export default function Transaction() {
  return (
    <div className='component'>
      <div className='maxWidth flex h-full min-h-[100dvh] w-full flex-col gap-10 bg-white'>
        <div className='flex items-center gap-4'>
          <img src='./icons/leftArrow.svg' alt='' />
          <div className='text-lgf font-bold'>Transaction Successful</div>
        </div>
        <div className='flex flex-grow flex-col items-center justify-between gap-4'>
          <div className='grid w-full rounded-2xl bg-card'>
            <div className='grid gap-2 p-5'>
              <div className='text-sm font-semibold'>Bank Transfer Successful </div>
              <div className='flex items-center justify-normal gap-1 font-bold leading-tight'>
                <div>₹5000</div>
                <img src='./icons/tick.svg' alt='' className='w-5' />
              </div>
              <div className='flex items-center justify-between gap-2 text-sm font-medium'>
                <div>14 Nov 21 | 10:26 am</div>
                <div>Txn ID : 1112953</div>
              </div>
            </div>
            <hr />
            <div className='grid p-5'>
              <div className='flex items-center justify-start gap-2'>
                <img src='./icons/tick_gray.svg' alt='' className='w-5' />
                <div className='flex flex-grow items-center justify-between text-xs font-semibold'>
                  <div>Initiated from DV Groups</div>
                  <div>14 Nov 21 | 10:26 am</div>
                </div>
              </div>
              <div className='px-[9px]'>
                <img src='./icons/line.svg' alt='' className='w-[2px]' />
              </div>
              <div className='flex items-center justify-start gap-2'>
                <img src='./icons/tick.svg' alt='' className='w-5' />
                <div className='flex flex-grow items-center justify-between text-xs font-semibold'>
                  <div>Raised to your Bank</div>
                  <div>14 Nov 21 | 10:26 am</div>
                </div>
              </div>
              <div className='px-[9px]'>
                <img src='./icons/line.svg' alt='' className='w-[2px]' />
              </div>
              <div className='flex items-center justify-start gap-2'>
                <img src='./icons/tick.svg' alt='' className='w-5' />
                <div className='flex flex-grow items-center justify-between text-xs font-semibold'>
                  <div>Processed by your Bank</div>
                  <div>14 Nov 21 | 10:26 am</div>
                </div>
              </div>
            </div>
            <hr />
            <div className='grid gap-2 p-5'>
              <div className='text-sm font-medium text-black/50'>Transfer to the following Bank Account:</div>
              <div className='grid gap-1 text-sm font-semibold'>
                <div>Amount: 1200000</div>
                <div>Branch : HDFC BANK</div>
              </div>
            </div>
            <hr />
            <div className='grid gap-3 rounded-b-xl border-l-8 border-accent p-5'>
              <div className='text-sm font-medium text-black/50'>Withdrawn From:</div>
              <div className='grid gap-1'>
                <div className='flex items-center justify-between gap-2 text-sm font-extrabold'>
                  <div>DV Group</div>
                  <div>₹5,000</div>
                </div>
                <div className='flex items-center justify-between gap-2 text-sm font-medium'>
                  <div>Interest</div>
                  <div>₹0</div>
                </div>
                <div className='flex items-center justify-between gap-2 text-sm font-medium'>
                  <div>Principal</div>
                  <div>₹5,000</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <button className='button rounded-full'>
            <div>Done</div>
          </button>
        </div>
      </div>
    </div>
  )
}
