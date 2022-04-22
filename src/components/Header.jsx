import { Button, Divider } from 'antd';

const Cbutton = () => {
  return (
     <>
<div style={{position:"relative", width:"75%"}}>
<div style={{display:"flex",  justifyContent:"flex-end"}}> <Button className='button' type="primary" style={{margin:"10px"}}> + Add cube</Button>
</div>
  <Divider />
    </div>
    </> 
  )
}

export default Cbutton;