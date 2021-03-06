import React, { Component } from 'react';
import './css/Home.css';
import bghead from './img/image.svg';
import man from './img/boy.png';
import man2 from './img/man2.png';
import fb from './img/fb.png';
import tw from './img/twitter.png';
import gh from './img/github.png';
import li from './img/linkedin.png';
import pt from './img/pinterest.png';
import Header from './Header.js';
import Footer from './Footer.js';
import Contact from './Contact';
import rnredux from './rnredux.jpg';
import profile from './profile.jpeg';
import Batch from './batch.js';
import ModalProfile from './ModalProfile';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';
import {Input, InputGroupAddon, Button } from 'reactstrap';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import Popout from 'react-popout';

class Home extends Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            code:'',
            checked: false,
        }
    }
    handleChecked(){
        this.setState({
            checked: true
        })
    }
    handleChange(event) {
        this.setState({code: event.target.value});
    }
    handleSubmit(){
        if(this.state.checked){
            this.props.history.push("/profile");
        }
        else{
            alert('Please Accept Term And Condition')
        }
    }

  render() {
    var bgheads = {
        width: '735px',
        height: 'auto',
        left: '45%',
        position: 'absolute',
        overflowx: 'hidden',
        marginLeft: 'auto',
        marginright: 'auto',
        maxWidth: '100%',
        backgroundrepeat: 'no-repeat',
        webkitbackgroundsize: 'cover',
        mozbackgroundsize: 'cover',
        obackgroundsize: 'cover',
        backgroundsize:'cover',
        backgroundposition:'center',
        backgroundimage:('src/Screen/img/image.svg'),
        backgroundattachment: 'fixed',
        paddingBottom: ( 'height' / 'width' * 100 ) + '%'
    }

    var h1 = {
         marginLeft: 'auto',
         marginLeft:'40%',
         marginTop:20
    }
    
    return (
       
      <div className="Hom" id="home">
        <Header />
        <body className="Hom-body">
        <div>
            <img id="home" src={bghead} alt="img" style={bgheads} />
            <div style={h1}>
                <h1 style={{
                    fontSize:'4vw',height:'auto',position:'relative'
                }}>Hi !</h1>

                <h1 style={{
                    color:'#685AA7',marginTop:'-10px',fontSize:'4vw',fontWeight:500,height:'auto',position:'relative'
                }}>I'm Human</h1>

                 <h1 style={{
                    fontSize:'3vw',height:'auto',position:'relative'
                }}>a graphic designer</h1>

                <br></br>
                <br></br>


            </div>

            <div className="image">
                  {/* <img src={man} alt="img" style={{
                            width:'200px',
                            marginLeft:'150px',
                            position:'absolute',
                            height:'auto'                      

                        }}/>   */}
                <div className="list-group">
                <div className="text-left">        
                <h1 style={{
                   color:'#685AA7', marginLeft: '27%', fontSize:'3vw',fontWeight:300,height:'auto',position:'relative'
                }}>About Me</h1>


                {/* Button */}
                { <a href="#contact"><button className="btn btn-primary" style={{
                    borderRadius:'50px',
                    width:'200px',
                    height:'auto',
                    textAlign:'left',
                    fontSize:'30px',
                    left:'70px',
                    float:'right',
                    position:'relative',
                    backgroundColor:'#685AA7',
                    borderColor:'#685AA7'
                    
                }}>Hire Me</button></a>     }

                <div style={{
                    marginLeft: '27%',width:'600px',height:'auto',letterSpacing:'0.1em',color: 'gray',position:'relative'
                }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                    </p>
                </div>

                <div className="getsocial">
                <h2 style={{
                    marginLeft:'27%',
                    marginBottom:'15px',
                    fontSize: '20px'
                }}>Get Social :</h2>

                <a href="#">
                <img src={fb} alt="img" style={{
                            width:'30px',
                            marginLeft:'27%',  
                        }}/>
                </a>
                
                <a href="#">
                <img src={tw} alt="img" style={{
                            width:'30px',
                            marginLeft:'1%',  
                        }}/>
                </a>

                <a href="#">
                <img src={gh} alt="img" style={{
                    width:'30px',
                    marginLeft:'1%',
                }}/>
                </a>

                <a href="#">
                <img src={li} alt="img" style={{
                            width:'30px',
                            marginLeft:'1%',
                            
                        }}/>
                </a>

                <a href="#">
                <img src={pt} alt="img" style={{
                            width:'30px',
                            marginLeft:'1%',
                            
                        }}/>
                </a>
                </div>
                
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br/><br/>
            <br/><br/>

            <div className="list-group">
            <div className="text-center">
                <h1 id="silabus" style={{
                    fontSize:'30px',color:'#685AA7',fontWeight:300
                }}>Silabus</h1>
            </div>
            <br/>
             <div>
             <CardDeck className="deck border border-0">
             <Card className="border border-0"><a href="/batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded imgcard"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                </CardBody>
                </a></Card>
            <Card className="border border-0"><a href="/batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                </CardBody>
            </a></Card>
            <Card className="border border-0"><a href="/batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                </CardBody>
            </a></Card>
            <Card className="border border-0"><a href="/batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                </CardBody>
            </a></Card>
            </CardDeck>
            <CardDeck className="deck border border-0">
             <Card className="border border-0"><a href="/batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded imgcard"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                </CardBody>
                </a></Card>
            <Card className="border border-0"><a href="/batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                </CardBody>
            </a></Card>
            <Card className="border border-0"><a href="/batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                </CardBody>
            </a></Card>
            <Card className="border border-0"><a href="/batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                </CardBody>
            </a></Card>
            </CardDeck>
            <br/><br/>
            </div>
            </div>   

            <div id="bootcamp" className="text-center"><br/>
                <p>What I Did ?</p>
                <h1 style={{
                    fontSize:'30px',color:'#685AA7',fontWeight:300
                }}>Bootcamp Batch</h1>
            </div>
            <div className="row cardbatch">
            <div className="col"> <a href='#'  data-toggle="modal" data-target="#myModal" className="listbatch">
                    <Batch /></a>
                </div>
                <div className="col"> <a href='#'  data-toggle="modal" data-target="#myModal" className="listbatch">
                    <Batch /></a>
                </div>
            </div>
            <div className="row cardbatch">
                <div className="col"> <a href='#'  data-toggle="modal" data-target="#myModal" className="listbatch">
                    <Batch /></a>
                </div>
                <div className="col"> <a href='#'  data-toggle="modal" data-target="#myModal" className="listbatch">
                    <Batch /></a>
                </div>
            </div>
            <div className="row cardbatch">
                <div className="col"> <a href='#'  data-toggle="modal" data-target="#myModal" className="listbatch">
                    <Batch /></a>
                </div>
                <div className="col"> <a href='#'  data-toggle="modal" data-target="#myModal" className="listbatch">
                    <Batch /></a>
                </div>
            </div>
            <br/><br/><br/><br/>
            <div id="contact">
            <Contact />
            </div>
            <br/>
            </div>
        </div>
        <Footer />
        <div>
            <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                    <h4 class="modal-title">Confirm</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                {/* <!-- Modal body --> */}
                <div class="modal-body"> 
                    <div>
                        <ModalProfile />
                    </div>
                </div>

                {/* <!-- Modal footer --> */}
                <div class="modal-footer">
                    <button type="button" class="btn btn-success"onClick={this.handleSubmit}>Submit</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </div>
      </div>
      </body>
      </div>
    );
  }
}

export default Home;
