export default function Balance() {
  return (
    <div className='component'>
      <div className='maxWidth flex h-full min-h-[100dvh] w-full flex-col gap-5 bg-white'>
        <div className='flex items-center justify-between gap-2 px-2'>
          <div className='bg-card rounded-full p-4'>
            <img src='./icons/slider.svg' alt='' className='aspect-square w-5' />
          </div>
          <div className='bg-card flex items-center justify-center gap-1 rounded-full pr-2'>
            <img src='./icons/appIcon.svg' alt='' className='aspect-square w-12 rounded-full border' />
            <div className='line-clamp-1 text-sm font-semibold'>Ananta Karmakar</div>
          </div>
          <div className='bg-card rounded-full p-4'>
            <img src='./icons/notification2.svg' alt='' className='aspect-square w-5' />
          </div>
        </div>
        <div className='grid gap-7'>
          <div className='grid gap-3'>
            <div>
              <div className='text-base text-black/50'>Your Balance</div>
              <div className='text-[3.5rem] leading-tight'>₹23,30,942</div>
            </div>
            <div className='flex items-center justify-start gap-3'>
              <button className='buttonRounded px-4 py-3'>
                <img src='./icons/addMoney.svg' alt='' className='w-6' />
                <div>Add Money</div>
              </button>
              <button className='buttonRounded py- px-4'>
                <img src='./icons/copy.svg' alt='' className='w-6' />
                <div>Add Money</div>
              </button>
            </div>
          </div>

          <div className='grid gap-2'>
            <div className='text-xl font-medium leading-tight'>Total earned</div>
            <div className='text-green flex items-baseline gap-2.5'>
              <div className='flex items-end gap-1'>
                <div className='text-lg font-bold'>₹</div>
                <div className='text-5xl font-bold'>0</div>
              </div>
              <div className='flex items-center gap-1 leading-tight'>
                <div>
                  <img src='./icons/polygon.svg' alt='' className='w-4' />
                </div>
                <div className='flex items-baseline'>
                  <div className='text-xl font-medium'>1.64</div>
                  <div className='text-sm'>/day</div>
                </div>
              </div>
            </div>
            <div className='text-sm font-medium text-black/60'>You will start earning interest from tomorrow</div>
          </div>
          <div className='bg-card flex items-center justify-around gap-1 rounded-lg px-2 py-7'>
            <div className='flex flex-col items-center justify-center gap-3.5'>
              <img src='./icons/rupee.svg' alt='' className='w-10' />
              <div className='text-center text-sm leading-tight'>Daily interest earning</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src='./icons/rupee0.svg' alt='' className='w-10' />
              <div className='text-center text-sm leading-tight'>Zero withdrawal charges</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src='./icons/percentage.svg' alt='' className='w-10' />
              <div className='text-center text-sm leading-tight'>Daily interest earning</div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
