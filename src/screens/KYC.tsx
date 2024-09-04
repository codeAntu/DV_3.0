export default function KYC() {
  return (
    <div className='component flexCenter'>
      <div className='maxWidth flex w-full flex-col items-center gap-20 '>
        <div className='flex flex-col gap-2.5 text-center'>
        <img src='./images/kyc.png' alt='' />
          <div className='text-2xl font-bold text-accent uppercase'>KYC being verified</div>
          <div className='text-xs font-semibold text-black/25'>The KYC review process will take approximately 2-3 days to complete. Please wait for further updates on your application</div>
        </div>
        <button className='button '>Done</button>
      </div>
    </div>
  )
}
