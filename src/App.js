import React, {useState} from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './App.css';
import './mobile.css'
import { useForm } from 'react-hook-form';
 

//form validation


  const schema=yup.object().shape({
    fullname: yup.string().required('Name is Required'),
    email: yup.string().email().required('Invalid Email'),
    number:yup.number().integer().positive().min(10).required('Phone Number is required')
  })

function App(){
  const {register,formState: {errors,isValid,isDirty} }=useForm({
    resolver: yupResolver(schema),
    mode:'all'

  });
  console.log(errors);



  const [formstep,setFormstep]=React.useState(1);
  const nxt_page=(e)=>{
 
    setFormstep(nxt=>nxt+1)
  }
  const pre_page=(e)=>{

    setFormstep(pre=>pre-1)
  } 

  //picks
  const [online,setOnline]=useState('');
  const [store,setStore]=useState('');
  const [custom,setCustom]=useState('');
  const [s1,setS1]=useState('')
  const [s2,setS2]=useState('')
  const[s3,setS3]=useState('')
 const [ts1,setTs1]=useState(0)
  const [ts2,seTs2]=useState(0)
  const[ts3,setTs3]=useState(0)
  const picks=(e)=>{
    if(e.target.value==="Online service"){
      setOnline(e.target.value)
      setS1("+$"+services+"/"+duration) 
     setTs1(services)
    }
    else if(e.target.value==="Larger Storage"){
      setStore(e.target.value)
      setS2("+$"+storage+"/"+duration)
       setTs2(storage)
    }
    else if(e.target.value==="Customizable"){
      setCustom(e.target.value)
      setS3("+$"+profile+"/"+duration)
     setTs1(profile)
    }
    else{
      setOnline('')
      setStore('')
      setCustom('')
    }
  }


  //plans
  const change=()=>{
    setFormstep(change=>change-2)
  }
  var [plans,setPlans]=useState('')
  var [price,setPrice]=useState()
  var [resultdur,setResultdur]=useState()
   const planSection=(e)=>{
 
     console.log(e.target.value);
     if(e.target.value==="Arcade"){
       setPrice(monthAcrade)
       setResultdur(duration)
     }
     else if(e.target.value==="advance"){
       setPrice(monthAdvance)
       setResultdur(duration)
     }
     else if(e.target.value==="pro"){
       setPrice(monthPro)
       setResultdur(duration)
     }
      setPlans(e.target.value); 
   }

var [monthAcrade,setAcrade]=useState(9);
  var [monthAdvance,setAdvance]=useState(12); 
  var [duration,setduration]=useState("mo"); 
  var [monthPro,setMonthPro]=useState(15);
  var [services,setServices]=useState(1);
  var [storage,setStoreage]=useState(2);
  var [profile,setProfile]=useState(2);
  var [plan,setPlan]=useState("Monthly");

  const handle=(e)=>{
    if(e.target.checked===true){
      setAcrade(90)
      setAdvance(120)
      setMonthPro(150)
      setduration("yr")
      setServices(10)
      setStoreage(20)
      setProfile(20)
      setPlan("Yearly")
    }else{
      setAcrade(9)
      setAdvance(12)
      setMonthPro(15)
      setduration("mo")
      setServices(1)
      setStoreage(2)
      setProfile(2)
      setPlan("Monthly")
    }
   }

  return (
   <>
   {/* first stage */}
    { formstep === 1 && (
    <div className='wrapper'>
     <div className='img'>
      <div className='steps'>
      <div className='round activeStatus'>
        <span>1</span>
      </div>
      <div>
        <p>STEP 1</p>
        <h5>YOUR INFO</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round'>
        <span>2</span>
      </div>
      <div>
        <p>STEP 2</p>
        <h5>SELECT PLAN</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round'>
        <span>3</span>
      </div>
      <div>
        <p>STEP 3</p>
        <h5>ADD-ONS</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round'>
        <span>4</span>
      </div>
      <div>
        <p>STEP 4</p>
        <h5>SUMMARY</h5>
      </div>
      </div>
     </div>
      <div className='content'>
      <h1>Personal Info</h1>
      <p className='mb-5'>Please provide your name, email address, and phone number.</p>
      <form >
      <div className='title'><label>Name</label> <span  className='hidden' id='name-err'>This field is required</span></div>
      <input {...register('fullname')}
      type='text'
      placeholder=' e.g. Stephen King'
      id='name'
      autocomplete="off"
      />
      <p>{errors.fullname?.message} </p>
        <div className='title'><label>Email Address</label><span className='hidden' id='email-err'>This field is required</span></div>
      <input {...register('email')}
      type='email' 
      placeholder=' e.g. stephenking@lorem.com'
      id='email'
      autocomplete="off"
      />
     <p>{errors.email?.message} </p>
        <div className='title'><label>Phone Number</label><span className='hidden' id='number-err'>This field is required</span></div>
      <input {...register('number')} 
      placeholder='  e.g. +1 234 567 890'
      id='number'
      autocomplete="off"
      />
     <p>{errors.number?.message} </p>
      </form>
      <div className='btn-wrapper mt-4'>
        <button className='ntx-btn' type='submit' onClick={nxt_page} disabled={isDirty && !isValid} >Next Step</button>
      </div>
      </div>
   </div>
   )}
   {/* second stage */} 
   { formstep === 2 && (
     <div className='wrapper'>
     <div className='img'>
      <div className='steps'>
      <div className='round '>
        <span>1</span>
      </div>
      <div>
        <p>STEP 1</p>
        <h5>YOUR INFO</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round activeStatus'>
        <span>2</span>
      </div>
      <div>
        <p>STEP 2</p>
        <h5>SELECT PLAN</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round'>
        <span>3</span>
      </div>
      <div>
        <p>STEP 3</p>
        <h5>ADD-ONS</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round'>
        <span>4</span>
      </div>
      <div>
        <p>STEP 4</p>
        <h5>SUMMARY</h5>
      </div>
      </div>
     </div>
      <div className='info'>
      <h1>Select your plan</h1>
      <p className='mb-5'>you have the optioin of monthly or yearly billing.</p>
      <form>
        <div className='grid'>
        <input type='radio' id='arcade' name='plan' value='Arcade' onClick={planSection}/>
          <label className='plan' htmlFor='arcade' >
            <div className='plan-1'>
            </div>
            <h6>Arcade</h6>
            <p>${monthAcrade}/{duration}</p>
          </label>
          <input type='radio' id='advance' name='plan' value='advance' onClick={planSection}/>
          <label className='plan' htmlFor='advance' >
          <div className='plan-2'>
          </div>
          <h6>Advanced</h6>
            <p>${monthAdvance}/{duration}</p>
          </label>
          <input type='radio' id='pro' name='plan' value='pro' onClick={planSection}/>

          <label className='plan' htmlFor='pro' >
          <div className='plan-3'>
          </div>
          <h6>pro</h6>
            <p>${monthPro}/{duration}</p>
          </label>
        </div>
        <div className='toggle_contain'>
          <label>Monthly</label>
        <input type="checkbox" id="checker" className='checked' onClick={handle}/>
      <label htmlFor="checker" class="toggle"></label>
      <label>Yearly</label>
        </div>
      </form>
      <div className='btn-wrapper mt-4'>
        <button className='pre-btn' onClick={pre_page}>Go Back</button>
        <button className='ntx-btn' onClick={nxt_page}>Next Step</button>
      </div>
      </div>
   </div>
  )}
     { formstep === 3 && (
     <div className='wrapper'>
     <div className='img'>
      <div className='steps'>
      <div className='round '>
        <span>1</span>
      </div>
      <div>
        <p>STEP 1</p>
        <h5>YOUR INFO</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round '>
        <span>2</span>
      </div>
      <div>
        <p>STEP 2</p>
        <h5>SELECT PLAN</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round activeStatus'>
        <span>3</span>
      </div>
      <div>
        <p>STEP 3</p>
        <h5>ADD-ONS</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round'>
        <span>4</span>
      </div>
      <div>
        <p>STEP 4</p>
        <h5>SUMMARY</h5>
      </div>
      </div>
     </div>
      <div className='info'>
      <h1>Pick add-ons</h1>
      <p className='mb-3'>Add-ons help enchance your gaming experience.</p>
      <form>
    
        <label className='boxes' htmlFor='online'>
        <input type='checkbox' value='Online service' id='online' onClick={picks}/>
        <div className='boxes_para'>
          <h4>Online Service</h4>
          <p>Access to multiplayer games</p>
        </div>
         <p className='price'>+${services}/{duration}</p>
        </label>

        <label className='boxes' htmlFor='str'>
        <input type='checkbox' value='Larger Storage' onClick={picks} id='str'/>
        <div className='boxes_para'>
          <h4>Larger Storeage</h4>
          <p>Extra 1TB of cloud save</p>
        </div>
         <p className='price'>+${storage}/{duration}</p>
        </label>

        <label className='boxes' htmlFor='prof'>
        <input type='checkbox' value='Customizable' onClick={picks} id='prof'/>
        <div className='boxes_para'>
          <h4>Customizable profile</h4>
          <p>custom theme on your profile</p>
        </div>
         <p className='price'>+${profile}/{duration}</p>
        </label>
   
      </form>
      <div className='btn-wrapper mt-1'>
      <button className='pre-btn' onClick={pre_page}>Go Back</button>
        <button className='ntx-btn' onClick={nxt_page}>Next Step</button>
      </div>
      </div>
   </div>
  )}

{ formstep === 4 && (
     <div className='wrapper'>
     <div className='img'>
      <div className='steps'>
      <div className='round '>
        <span>1</span>
      </div>
      <div>
        <p>STEP 1</p>
        <h5>YOUR INFO</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round '>
        <span>2</span>
      </div>
      <div>
        <p>STEP 2</p>
        <h5>SELECT PLAN</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round '>
        <span>3</span>
      </div>
      <div>
        <p>STEP 3</p>
        <h5>ADD-ONS</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round activeStatus'>
        <span>4</span>
      </div>
      <div>
        <p>STEP 4</p>
        <h5>SUMMARY</h5>
      </div>
      </div>
     </div>
      <div className='info'>
      <h1>Finishing up</h1>
      <p className='mb-2'>Double-check everything looks OK before confirming</p>
      <div className='final mt-4'>
      
          <div className='services'>
          <div>
          <h6>{plans} ({plan})</h6>
          <p onClick={change}>change</p>
          </div>  
          <h6>${price}/{resultdur}</h6>
          </div >
          <hr/>
       
          <div className='services'>
            <p>{online}</p>
            <span>{s1}</span>
          </div>
          <div className='services'>
            <p>{store}</p>
            <span>{s2}</span>
          </div>
          <div className='services'>
            <p>{custom}</p>
            <span>{s3}</span>
          </div>
      </div>
      <div className='services'>
            <p>Total (per {plan})</p>
            <h3 className='text-primary my-5'>+${price+ts1+ts2+ts3}/{duration}</h3>
          </div>
      <div className='btn-wrapper mt-4'>
      <button className='pre-btn' onClick={pre_page}>Go Back</button>
        <button className='ntx-btn' onClick={nxt_page}>submit</button>
      </div>
      </div>
   </div>
  )}

{ formstep === 5 && (
     <div className='wrapper'>
     <div className='img'>
      <div className='steps'>
      <div className='round '>
        <span>1</span>
      </div>
      <div>
        <p>STEP 1</p>
        <h5>YOUR INFO</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round '>
        <span>2</span>
      </div>
      <div>
        <p>STEP 2</p>
        <h5>SELECT PLAN</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round '>
        <span>3</span>
      </div>
      <div>
        <p>STEP 3</p>
        <h5>ADD-ONS</h5>
      </div>
      </div>
      <div className='steps'>
      <div className='round activeStatus'>
        <span>4</span>
      </div>
      <div>
        <p>STEP 4</p>
        <h5>SUMMARY</h5>
      </div>
      </div>
     </div>
      <div className='thanks'>
        <div className='icon'>

        </div>
        <h1>Thank you!</h1>
        <p>Thanks for confirming your Subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgamming.com</p>
    
   
      </div>
   </div>
  )}

   
   
 </>
  );
}

export default App;
