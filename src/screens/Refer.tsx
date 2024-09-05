export default function Refer() {
  return (
    <div className='component pb-24'>
      <div className='maxWidth flexCol gap-6'>
        <div className='headerContainer'>
          <div className='header'>Invite</div>
          {/* <img src='./icons/appIcon.svg' alt='' className='profilePic ' /> */}
        </div>
        <div className='flexCol gap-10'>
          <div className='text-lg font-semibold text-center'>Get 5% for Every Referral</div>
          <img src="./images/refer.png" alt="" className="px-14 py-5 " />
          <div className='inputBox justify-between gap-2 border-none px-3 py-1.5'>
            <div className='line-clamp-1 text-sm font-medium'>https://www.telegram.com/I..</div>
            <button className='buttonRounded px-10'>Copy</button>
          </div>
          <div className='flexCenter '>
            <button className='buttonRounded px-16 '>View My Invitation</button>
          </div>
        </div>
      </div>
    </div>
  )
}
