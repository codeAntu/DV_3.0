export default function Plans() {
  return (
    <div className='component'>
      <div className='maxWidth flex h-full min-h-[100dvh] w-full flex-col gap-10 bg-white'>
        <div className='flex items-center justify-between gap-2 px-2'>
          <div className='rounded-full bg-card p-4'>
            <img src='./icons/slider.svg' alt='' className='aspect-square w-5' />
          </div>
          <div className='flex items-center justify-center gap-1 rounded-full bg-card pr-3'>
            <img src='./icons/appIcon.svg' alt='' className='aspect-square w-12 rounded-full' />
            <div className='line-clamp-1 text-sm font-semibold'>Ananta Karmakar</div>
          </div>
          <div className='rounded-full bg-card p-4'>
            <img src='./icons/notification2.svg' alt='' className='aspect-square w-5' />
          </div>
        </div>
        <div>
          <div className='font-bold'>Plans</div>
          <div className='bg-card p-5 grid gap-5 rounded-xl'>
            <div className='grid grid-cols-2 gap-2.5'>
              <div>
                <div className='text-black/50'>Amount Invested</div>
                <div className='text-xl font-medium'>₹23,30,942</div>
              </div>
              <div className='text-right'>
                <div className='text-black/50'>Today Return</div>
                <div className='text-xl font-medium'>₹23,30,942</div>
              </div>

              <div>
                <div className='text-black/50'>Total Return</div>
                <div className='text-xl font-medium'>₹3,30,942</div>
              </div>
              <div className='text-right'>
                <div className='text-black/50'>Lock - In</div>
                <div className='text-xl font-medium'>3 Month</div>
              </div>
              <div>
                <div className='text-black/50'>Date</div>
                <div className='text-xl font-medium'>21/08/2024</div>
              </div>
              <div className='text-right'>
                <div className='text-black/50'>Time</div>
                <div className='text-xl font-medium'>4:14 PM</div>
              </div>
            </div>
            <button className="button3">
              <img src='./icons/lock3.svg' alt='' className="buttonIcon" />
              <div>Withdraw</div>
            </button>
          </div>
          <div className='bg-card p-5 grid gap-5 rounded-xl'>
            <div className='grid grid-cols-2 gap-2.5'>
              <div>
                <div className='text-black/50'>Amount Invested</div>
                <div className='text-xl font-medium'>₹23,30,942</div>
              </div>
              <div className='text-right'>
                <div className='text-black/50'>Today Return</div>
                <div className='text-xl font-medium'>₹23,30,942</div>
              </div>

              <div>
                <div className='text-black/50'>Total Return</div>
                <div className='text-xl font-medium'>₹3,30,942</div>
              </div>
              <div className='text-right'>
                <div className='text-black/50'>Lock - In</div>
                <div className='text-xl font-medium'>3 Month</div>
              </div>
              <div>
                <div className='text-black/50'>Date</div>
                <div className='text-xl font-medium'>21/08/2024</div>
              </div>
              <div className='text-right'>
                <div className='text-black/50'>Time</div>
                <div className='text-xl font-medium'>4:14 PM</div>
              </div>
            </div>
            <button className="button rounded-full">
              <div>Withdraw</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
