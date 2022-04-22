import { InputNumber,  Space, Button, Divider } from 'antd';

const Field = () => {
    return (
       <>
     <div style={{position:"relative",width:"25%"}}>
        <div style={{display:"flex",}}>   
        <div style={{margin:"10px", paddingTop:"5px"}}><h4>Cube properties</h4></div>
        <Button style={{margin:"10px", color:"red"}}>Delete</Button>
        </div> 
        <Divider />
        <div><h4>Position</h4></div>
       <Space direction="vertical">
        <InputNumber addonBefore="X:" defaultValue={1} />     
        </Space>
        <Space direction="vertical">
        <InputNumber addonBefore="Y:" defaultValue={1} />     
        </Space>
        <Space direction="vertical">
        <InputNumber addonBefore="Z:" defaultValue={1} />     
        </Space>
        <div><h4>Dimensions</h4></div>
        <Space direction="vertical">
        <InputNumber addonBefore="X:" defaultValue={1} />     
        </Space>
        <Space direction="vertical">
        <InputNumber addonBefore="Y:" defaultValue={1} />     
        </Space>
        <Space direction="vertical">
        <InputNumber addonBefore="Z:" defaultValue={1} />     
        </Space>
     </div>
      </> 
      
    )
  }
  
  export default Field




