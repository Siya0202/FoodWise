
import React from 'react';
const { Header, Footer, Content } = Layout;
import { Input, Space, Layout,Card, Modal,Select,Button,Tooltip} from 'antd';
const { Search } = Input;
import axios from "axios";
import Recipe from './Recipe';
import '../style/hope.css'
const { Meta } = Card;
import Cookie from "js-cookie";
import img1 from '../images/Chicken-Biryani.jpg'
import img4 from '../images/user.png'
import img5 from '../images/logo.png'
import { FacebookFilled, InstagramFilled, UserOutlined, PoweroffOutlined, SearchOutlined,InfoCircleOutlined  } from '@ant-design/icons'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const error = () => {
  Modal.error({
    title: 'Sorry! NO RECIPIES FOUND',
    
    content: '',
  });
};

const Hope = (props) => {
  const navigate= useNavigate();
  const [modal, setModal]=useState(false);
  const[search,setSearch]=useState("");
  const[len,setLen]=useState("");
  const[Mymeal,setMeal]=useState();
  const arr=search.split(',');

  const [ing, setIng]= useState("")

  

  const { Option } = Select;
  const children = [];

  

  const handleChange = (value) => {
    console.log(` ${value}`);
    setIng(value);
  };


  useEffect(()=>{
    if(!localStorage.getItem('token'))
    {
      setTimeout(()=>{
        navigate('/login');
      },7000)
    }
  },[])
  const onSearch = () => {
      let url="https://localhost:7122/api/Quantities/"+ing;
      axios.get(url).then(function (response){
        setMeal(response.data);
        console.log(response.data);
        setLen(arr.length);
        setSearch(" ");
     }).catch((error)=>{
      Modal.error({
        title: 'Sorry! NO RECIPIES FOUND',
        
        content: '',
      });
     })
  }
return(
    <>
    <Layout className='layout-section'>
      <Header style={{height:70}}>
      <div style={{color:'white',textAlign:'left',fontSize:40,fontWeight:'lighter', marginTop:4 }}>FOODWISE <img style={{width:43,height:55, marginTop:-12}} src={img5}/>
      <li> <a ><img onClick={()=>{setModal(true)}}  style={{width:39,height:40,float:'right', marginTop:-50}} src={img4} /></a></li>
      {/* <Modal title="Your Profile" visible={modal} okText="Sign Out" okButtonProps={{danger:true, type:"dashed"}} onOk={()=>
        {localStorage.clear();
        navigate('/login');}} onCancel={()=>setModal(false)} maskClosable={true} style={{top:20, left:600}} width={300} >  */}
         <Modal  title={<h4><UserOutlined style={{ fontSize: 30, marginLeft:50, }}/> Your Profile</h4>} visible={modal} okText="Sign Out" okButtonProps={{danger:true, type:"dashed", icon:<PoweroffOutlined /> }} onOk={()=>navigate("/Login")} onCancel={()=>setModal(false)} cancelButtonProps={{style: {display: 'none'}}} maskClosable={true} style={{top:20, left:600}} width={300}>
      <label>Name: {localStorage.getItem('username')}</label> <br/>
      <label>Email: {localStorage.getItem('em')}</label></Modal>
      </div>
      </Header>
      <Content style={{backgroundColor:'white'}}>
        <div className='hpimg'>
          <div className='in'> 
            <Space direction="vertical"/>
            <h1 style={{ textAlign:'center', fontSize:80,color:'black'}}>Find a Recipe</h1>

            {/* <Search size="large" placeholder="Example: chicken, rice, curd" onChange={(e)=>setSearch(e.target.value)} onSearch={onSearch} value={search}/> */}

            <Select 
              
               
              className="searchBar"
                mode="tags"
                style={{
                  width: "100%",
                }}
              // placeholder ={<SearchOutlined className="searchIcon"/>}
              
              onChange ={handleChange}
                showSearch={true}
               
                tokenSeparators={[","]}
               
              >
                {children}
                 <Option value="rice">rice</Option>
                <Option value="curd">curd</Option>
                <Option value="carrot">carrot</Option>
                <Option value="wheat">wheat</Option>
                <Option value="milk">milk</Option>
                <Option value="potato">potato</Option>
                
                <Option value="sugar">sugar</Option>
                <Option value="salt">salt</Option>
                <Option value="butter">butter</Option>
                <Option value="cheese">cheese</Option>
                <Option value="tomato">tomato</Option>
                <Option value="chilli">chilli</Option>
                <Option value="chicken">chicken</Option>
                <Option value="fish">fish</Option>
                <Option value="egg">egg</Option>

                <Option value="grapefruit">Grapefruit</Option>
                <Option value="lime">Lime</Option>
                <Option selected value="coconut">Coconut</Option>
                <Option value="mango">Mango</Option>
               </Select>

               <Tooltip title="search">
      <Button className='searchbutton'
      onClick={()=>{
        onSearch()
        console.log(ing);
      }}  shape="round" icon={<SearchOutlined />} />
    </Tooltip>




          </div>
        </div>
        <p className='yu' style={{color:'black'}}>{Mymeal && <h1 className='r' style={{color:'black'}}>Recipes:</h1>}</p>
      <div className="wrapper">
      { Mymeal?.map((res)=>{return(<Recipe data={res} amt={len}/>)} ) }
      </div>
      <h1 className='r' style={{color:'black'}}>Top Recommendations</h1>
      <div className="wrapper">
      <Card className='dishes' hoverable style={{ width: 340,}} cover={<a><img src={img1}/></a>}>
        <Meta title="Chicken Biryani " description="A traditional Indian rice dish with tender chicken in a spicy, creamy sauce." />
      </Card>
      <Card className='dishes' hoverable style={{ width: 340,}}cover={<a><img src="https://www.entertainingdiva.com/recipes/wp-content/uploads/sites/10/2016/07/mojito-mocktail-3-1-500x500.jpg"/></a>}>
        <Meta title="Virgin Mojito" description="This is so refreshing. Cool, smooth summer drink. Delicious " />
      </Card>
      <Card className='dishes' hoverable style={{ width: 340,}}cover={<a><img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5506686.jpg&w=595&h=595&c=sc&poi=face&q=60&orient=true"/></a>}>
        <Meta title="Strawberry-Mango Ice Cream" description="Inspired by The Mastercard (a frozen strawberry-mango concoction " />
      </Card>
      <Card className='dishes' hoverable style={{ width: 340,}}cover={<a><img src="https://www.entertainingdiva.com/recipes/wp-content/uploads/sites/10/2016/07/mojito-mocktail-3-1-500x500.jpg"/></a>}>
        <Meta title="Pancakes" description="This is so refreshing. Cool, smooth summer drink. Delicious " />
      </Card>
      <Card className='dishes' hoverable style={{ width: 340,}}cover={<a><img src="https://www.entertainingdiva.com/recipes/wp-content/uploads/sites/10/2016/07/mojito-mocktail-3-1-500x500.jpg"/></a>}>
        <Meta title="Virgin Mojito" description="This is so refreshing. Cool, smooth summer drink. Delicious " />
      </Card>
      <Card className='dishes' hoverable style={{ width: 340,}}cover={<a><img src="https://www.entertainingdiva.com/recipes/wp-content/uploads/sites/10/2016/07/mojito-mocktail-3-1-500x500.jpg"/></a>}>
        <Meta title="Virgin Mojito" description="This is so refreshing. Cool, smooth summer drink. Delicious " />
      </Card>
      </div>
      </Content>
      <Footer>
        <div className="line-5" />
          <div className="sm">
            <div style={{fontWeight:'bold', marginLeft: '-15px',fontSize:'25px',fontFamily:'inter' }}>Site map</div>
              <div className="ul" style={{ marginLeft: '20px' }}></div>
                <div style={{fontWeight: 400, fontFamily: 'sans',fontSize:20}}>Recipe</div>
                <div style={{fontWeight: 450, fontFamily: 'sans',fontSize:20}}>About Us</div>
            </div>
          <div className="vl" style={{left: "33.33%"}} />
          <div className="vl" style={{left: "66.66%"}} />
          <div className="cu" >
            <h2 style={{ fontWeight: 900, fontStyle: 'bold', fontFamily: 'Inter' }}>Contact Us</h2>
            <div className="q" style={{ marginRight: '0%' }}>
              <h4>+91 1234567890</h4>
              <h3 style={{ marginRight: '15px' }}>Goa,India</h3>
              </div>
            </div>
            <div className='social'>
              <h2  style={{fontFamily: 'Inter'}}>Lets Be friends!</h2>
                <FacebookFilled style={{ fontSize: 32, padding: '0 20px', }} />
                <InstagramFilled style={{ fontSize: 32 }} />
              </div> 
          </Footer>
    </Layout>
  </>
);
};
  export default Hope;
