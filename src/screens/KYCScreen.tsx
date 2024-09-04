export default function KYCScreen() {
  return (
    <div className='component flex justify-center  '>
      <div className='maxWidth flexCol flex-grow gap-4 '>
        <div className='header'>KYC Screen</div>
        <div className='content'>
          <div className='flexCol gap-5 '>
            <div className='flexCol gap-2'>
              <div className='inputContainer'>
                <div className='inputText'>Full Name</div>
                <div className='inputBox'>
                  <input type='text' className='input' placeholder='Enter your Full Name' />
                </div>
              </div>
             
              <div className='flex flex-col gap-1.5'>
                <div className='inputContainer'>
                  <div className='inputText'>Mobile Number </div>
                  <div className='inputBox'>
                    <input type='text' className='input' placeholder='Enter your Mobile Number' />
                  </div>
                </div>
                <div className='inputContainer'>
                  <div className='inputText'>Address</div>
                  <div className='inputBox'>
                    <input type='text' className='input' placeholder='Enter your Address' />
                  </div>
                </div>
                <div className='inputContainer'>
                  <div className='inputText'>Country</div>
                  <div className='inputBox'>
                    <input type='text' className='input' placeholder='Enter your Country' />
                  </div>
                </div>
                <div className='inputContainer'>
                  <div className='inputText'>State</div>
                  <div className='inputBox'>
                    <input type='text' className='input' placeholder='Enter your State' />
                  </div>
                </div>
                <div className='inputContainer'>
                  <div className='inputText'>ID Proof</div>
                  <label className='border border-accent/80 bg-accent/5 rounded-[14px] h-28 flex justify-center items-center'>
                    <input type='file' className='input hidden' placeholder='Enter your State'  />
                    <div className="text-accent text-sm font-semibold">Upload ID proof</div>
                  </label>
                </div>
              </div>
            </div>
            
          </div>
          <div className='flexCenter w-full py-4'>
            <button className='button'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
