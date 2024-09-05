export default function Plans(){
  return(
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
        
      </div>
    </div>
  )
}