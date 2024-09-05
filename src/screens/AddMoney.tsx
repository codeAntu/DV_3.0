export default function AddMoney() {
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
          <div className='flex items-center justify-between gap-3 text-sm font-semibold'>
            <div className='w-full rounded-full bg-accent py-3.5 text-center text-white'>3 Month</div>
            <div className='w-full rounded-full bg-card2 py-3.5 text-center'>6 Month</div>
            <div className='w-full rounded-full bg-card2 py-3.5 text-center'>12 Month</div>
          </div>
          <div className='flex flex-col gap-6 rounded-2xl bg-card px-5 py-7'>
            <div className='w-full text-xl text-black/60'>Earn up to 1 % / mon</div>
            <div className='flex w-full items-center justify-between text-lg font-medium'>
              <div>Add Amount</div>
              <div className='text-xl font-semibold'>₹ 1000</div>
            </div>
            <div className='flex w-full items-center justify-between text-lg font-medium'>
              <div>To earn</div>
              <div className='text-xl font-semibold text-green'>+ ₹ 11000</div>
            </div>
            <div className='inputBox grid gap-1 px-5 py-5'>
              <div className='text-base text-black/50'>Earn up to</div>
              <div className='flex items-center justify-normal gap-4'>
                <div className='text-xl font-semibold'>3%</div>
                <div className='flex gap-1 rounded-md bg-white px-1'>
                  <img src='./icons/lock2.svg' alt='' className='w-4' />
                  <div className='text-base font-medium'>3 Month</div>
                </div>
              </div>
            </div>
            <div className='flex w-full items-center justify-center pt-3'>
              <button className='buttonRounded px-7 py-2'>
                <img src='./icons/addMoney.svg' alt='' className='w-6' />
                <div>Add Money</div>
              </button>
            </div>
          </div>
          <div className='text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </div>
          <div className='text-sm'>
            For more information - refer to the
            <span className='text-blue'> FAQ </span>
            section &<span className='text-blue'>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </div>
  )
}
