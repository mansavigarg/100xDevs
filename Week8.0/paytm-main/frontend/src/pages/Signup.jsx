import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'

const Signup = () => {
  return (
    <div className=' bg-slate-300 h-screen flex justify-center'>
      <div className=' flex flex-col justify-center'>
        <div className=' w-80 rounded-lg bg-white p-4 h-max text-center px-4'>
            <Heading label={"Sign Up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox label={"First Name"} placeholder={"Mansavi"} />
            <InputBox label={"Last Name"} placeholder={"Garg"} />
            <InputBox label={"Email"} placeholder={"mansavigarg@gmail.com"} />
            <InputBox label={"Password"} placeholder={"********"} />
            <div className=' pt-4'>
              <Button label={"Sign Up"} />
            </div>
            <BottomWarning label={"Already have an Account?"} buttonText={"Sign in"} to={"/signin"}/>
        </div>
      </div>
    </div>
  )
}

export default Signup