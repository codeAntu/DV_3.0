export default function Balance() {
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
        <div className='grid gap-8'>
          <div className='grid gap-3'>
            <div>
              <div className='text-base text-black/50'>Your Balance</div>
              <div className='text-[3.5rem] leading-tight'>₹23,30,942</div>
            </div>
            <div className='flex items-center justify-start gap-3'>
              <button className='buttonRounded px-4 py-2.5'>
                <img src='./icons/addMoney.svg' alt='' className='w-6' />
                <div>Add Money</div>
              </button>
              <button className='buttonRounded px-4 py-2.5'>
                <img src='./icons/copy.svg' alt='' className='w-6' />
                <div>Add Money</div>
              </button>
            </div>
          </div>

          <div className='grid gap-2'>
            <div className='text-xl font-medium leading-tight'>Total earned</div>
            <div className='flex items-baseline gap-2.5 text-green'>
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
            <div className='text-sm font-medium text-black/50'>You will start earning interest from tomorrow</div>
          </div>
          <div className='flex items-center justify-around gap-1 rounded-lg bg-card px-2 py-7'>
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

          <div className="grid gap-3">
            <div className="text-lg font-bold">Refer & Earn</div>
            <div className='profileCard grid gap-4 bg-card'>
              <div className='leading-tight'>Invite friends, earn 1.5 million—easy referral bonus available!</div>
              <div className="w-full flex justify-between items-center gap-2 " >
                <img src="./icons/add.svg" alt="" className="w-14" />
                <img src="./icons/add.svg" alt="" className="w-14" />
                <img src="./icons/add.svg" alt="" className="w-14" />
                <img src="./icons/add.svg" alt="" className="w-14" />
                <img src="./icons/add.svg" alt="" className="w-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
