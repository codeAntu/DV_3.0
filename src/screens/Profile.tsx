export default function Profile() {
  return (
    <div className='component'>
      <div className='maxWidth flex h-full min-h-[100dvh] w-full flex-col justify-between gap-2'>
        <div className='header'>Profile</div>

        <a href="#" className='profileCard'>
          <img src='./icons/alert.svg' alt='' className='w-7' />
          <div className='flex flex-grow items-center justify-between'>
            <div className='flex flex-col gap-0'>
              <div className='text[17px] font-extrabold uppercase leading-tight text-[#FF0303]'>Alert </div>
              <div className='text-sm font-normal text-accent'>Your KYC is not completed</div>
            </div>
            <a href="#">
              <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
            </a>
          </div>
        </a >

        <div className='profileCard'>
          <img src='./icons/appIcon.svg' alt='' className='aspect-square w-16 rounded-full border border-black/20' />
          <div className='flex flex-grow items-center justify-between'>
            <div className='flex flex-col gap-0'>
              <div className='line-clamp-1 text-lg font-extrabold leading-tight text-accent'>CodeAntu</div>
              <div className='line-clamp-1 font-normal text-black/50'>codeantu@gmail.com</div>
            </div>
            <a href="#">
              <img src='./icons/edit.svg' alt='' className='w-7' />
            </a>
          </div>
        </div>

        <div className="grid gap-2"> 
          <div className='profileText'>Account</div>
          <div className='grid gap-4 rounded-lg bg-white pl-3 pr-4 py-5'>
            <div className='flex flex-grow items-center justify-between'>
              <div className='flex flex-grow items-center gap-3'>
                <div className='profileCardIcon'>
                  <img src='./icons/profile2.svg' alt='' className='w-7' />
                </div>
                <div className='profileCardText'>Account</div>
              </div>
              <a href="#">
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </a>
            </div>
            <hr className=" border-black/5 border-t"/>
            <div className='flex flex-grow items-center justify-between'>
              <div className='flex flex-grow items-center gap-3'>
                <div className='profileCardIcon'>
                  <img src='./icons/privacy.svg' alt='' className='w-7' />
                </div>
                <div className='profileCardText'>Privacy</div>
              </div>
              <a href="#">
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </a>
            </div>
            <hr className=" border-black/5 border-t"/>
            <div className='flex flex-grow items-center justify-between'>
              <div className='flex flex-grow items-center gap-3'>
                <div className='profileCardIcon'>
                  <img src='./icons/privacy2.svg' alt='' className='w-7' />
                </div>
                <div className='profileCardText'>Privacy</div>
              </div>
              <a href="#">
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </a>
            </div>
          </div>
          <div className='profileText '>App Setting</div>
          <div className='grid gap-4 rounded-lg bg-white pl-3 pr-4 py-5'>
            <div className='flex flex-grow items-center justify-between'>
              <div className='flex flex-grow items-center gap-3'>
                <div className='profileCardIcon'>
                  <img src='./icons/language.svg' alt='' className='w-7' />
                </div>
                <div className='profileCardText'>Language</div>
              </div>
              <a href="" className="flex justify-center items-center gap-2 ">
                <div className="text-black/50  text-sm font-medium">
                  English
                </div>
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </a>
            </div>
           
          </div>
          <div className='profileText'>Others</div>
          <div className='grid gap-4 rounded-lg bg-white pl-3 pr-4 py-5'>
            <div className='flex flex-grow items-center justify-between'>
              <div className='flex flex-grow items-center gap-3'>
                <div className='profileCardIcon'>
                  <img src='./icons/about.svg' alt='' className='w-7' />
                </div>
                <div className='profileCardText'>About Us</div>
              </div>
              <a href="#">
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </a>
            </div>
            <div className='flex flex-grow items-center justify-between'>
              <div className='flex flex-grow items-center gap-3'>
                <div className='profileCardIcon'>
                  <img src='./icons/rate.svg' alt='' className='w-7 p-0.5' />
                </div>
                <div className='profileCardText'>Rate Us</div>
              </div>
              <a href="#">
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
