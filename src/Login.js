
import React, { Component } from 'react';
 import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-material-responsive-grid';
 import UploadPage from '../src/UploadPage';
 import RaisedButton from 'material-ui/RaisedButton';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        var apiBaseUrl = "https://salty-fortress-75943.herokuapp.com/api/auth/login";

        const { email,password } = this.state;
        const { uploadScreen } = this.props;

        let data = {
             email,
            password
           
        }


        console.log(JSON.stringify(data));
        axios.post(apiBaseUrl, data, {
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        }).then((result) => {
            //access the results here....
            // alert(result);
            console.log(result);
            uploadScreen.push('/UploadPage');
        }).catch(function (error) {
            console.log('error got' + error);
        });

        // .then(function (response) {
        //     console.log(response);
        //     if (response.data.code === 200) {
        //         console.log("Login successfull");
        //         history.push('/shipperDash');
        //     }
        //     else if (response.data.code === 204) {
        //         console.log("phone and password do not match");
        //         alert("phone and password do not match")
        //     }
        //     else {
        //         console.log("phone and password does not exists");
        //         history.push('/shippersignup')
        //     }
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }

        render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                        title ="Login"/>
                         <form onSubmit={this.onSubmit} >
                                 <Row>
                                    <Col md={12}>
                                        <div className="form-group">
                                            <TextField
                                                name="email"
                                                value={this.state.email}
                                                floatingLabelText="Enter your email"
                                                onChange={this.onChange}
                                                 required

                                             />
                                         </div>
                                    </Col>
                                 </Row>
                                 <br />
                                 <Row>
                                     <Col md={12}>
                                         <div className="form-group">
                                             <TextField
                                                 type="password"
                                                 name="password"
                                                 value={this.state.password}
                                                 floatingLabelText="Enter your Password"
                                                 onChange={this.onChange}
                                                 required
                                             />
                                         </div>
                                     </Col>
                                </Row>
                                 <br />
                                 <div className="button-submit" >
                                    <RaisedButton  type="submit" style={style} className="btn btn-primary">submit</RaisedButton >
                                 </div>
                             </form>



                        
                        </div>

                    </MuiThemeProvider>
                    
                </div>

        );
    }

 

}


//     render() {
//         return (
//             <div>
//             <MuiThemeProvider>
//                     <div className="container">


//                         <Grid>
//                             <Row>
//                                 <Col md={12}>
//                                     <Link to="/shippersignup">
//                                         <button type="button" className="btn btn-primary">
//                                             Create Account
//                         </button>
//                                     </Link>
//                                 </Col>
//                             </Row>
//                             <form onSubmit={this.onSubmit} >
//                                 <Row>
//                                     <Col md={12}>
//                                         <div className="form-group">
//                                             <TextField
//                                                 type="number"
//                                                 value={this.state.firstName}
//                                                 floatingLabelText="Enter your phoneNumber"
//                                                 onChange={this.onChange}
//                                                 required

//                                             />
//                                         </div>
//                                     </Col>
//                                 </Row>
//                                 <br />
//                                 <Row>
//                                     <Col md={12}>
//                                         <div className="form-group">
//                                             <TextField
//                                                 type="password"
//                                                 value={this.state.firstName}
//                                                 floatingLabelText="Enter your Password"
//                                                 onChange={this.onChange}
//                                                 required
//                                             />
//                                         </div>
//                                     </Col>
//                                 </Row>
//                                 <br />
//                                 <div className="button-submit">
//                                     <button type="submit" className="btn btn-primary">submit</button>
//                                 </div>
//                             </form>


//                         </Grid>
//                     </div>
//                 </MuiThemeProvider>
//             </div>
//         );
//     }
// }
 const style = {
  margin: 15,
 };
export default Login;

















// import React,{Component}from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import axios from 'axios';
// //import uploadScreen from './UploadScreen';
// import UploadPage from '../src/UploadPage';


// class Login extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             email:'',
//             password:''
//         }
//     }

//     handleClick(event){
//        // var apiBaseUrl = "https://localhost:3000/api/auth/login";
//        var apiBaseUrl ="https://ancapbooking.herokuapp.com/login/shipper";
//         var self = this;
//         var payload={
//             "email":this.state.email,
//             "password":this.state.password
//         }
//         axios.post(apiBaseUrl+'login',payload)
//         .then(function(response){
//             console.log(response);
//             if(response.data.code === 200){
//                 console.log("Login successfull");
//                 var uploadScreen=[];
//                 uploadScreen.push(<UploadPage appContext={self.props.appContext} role ={self.state.loginRole}/>)
//                 self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//             }
//             else if(response.data.code === 204){
//                 console.log("Email password do not match");
//                 alert("response.data.successs")
  
//             }
//             else{
//                 console.log("Email does not exits");
//                 alert("Email does not exist");
//             }
          
          
//         })
//         .catch(function(error){
//             console.log(error);
//         });
//     }  
      

//     render(){
//         return(
//             <div>
//                 <MuiThemeProvider>
//                     <div>
//                         <AppBar
//                         title ="Login"/>
//                         <TextField
//                         hintText ="Enter your Email"
//                         floatingLabel ="Username"
//                         onChange ={(event,newValue)=>
//                         this.setState({username:newValue})}/>
//                         <br/>
//                         <TextField
//                         type ="password"
//                         hintText ="Enter your password"
//                         floatingLabelText="Password"
//                         onChange ={(event,newValue)=>
//                         this.setState({password:newValue})}/>
//                         <br/>
//                         <RaisedButton label ="Submit" primary={true} style={style}
//                         onClick ={(event)=>this.handleClick(event)}/>

//                         </div>

//                     </MuiThemeProvider>
                    
//                 </div>

//         );
//     }

 

// }
// const style ={
//     margin:15,

// };

    

// export default Login;
