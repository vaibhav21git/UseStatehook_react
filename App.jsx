import React , {useState} from "react";
import './index.css'


const App = () =>
{
    const [fullname ,setfullname] = useState(
    {
        fname: "",
        lname: "",
        emailid : "",
        phoneno:"",
    });

    const modify = (event) =>
    {
        const value = event.target.value;
        const name  = event.target.name;
        console.log(name);

        setfullname((preValue) =>
        {
            if(name === "fname")
            {
                return {
                fname :  value,
                 lname : preValue.lname,
                emailid : preValue.emailid,
                phoneno : preValue.phoneno,
                };


            }

            else if (name === 'lname')
            {
                return{
                fname :preValue.fname,
                lname :  value,             
                emailid : preValue.emailid,
                phoneno : preValue.phoneno
                };



            }

            else if  (name ===  'emailid')
            {
                return {

                fname : preValue.fname,
                lname : preValue.lname,
                emailid : value,
                phoneno : preValue.phoneno
                };
            }

            else
            {
                return {
                fname : preValue.fname,
                lname : preValue.lname,
                emailid : preValue.emailid,
                phoneno : value
                };
            }
        })
    }



    const getty = (event) =>
    {
       event.preventDefault();
       alert('form submitted');

    }
    return (
        <div  className = "cintri" >
         <h1 className ="formy">hello {fullname.fname} {fullname.lname} </h1>
         <p className ="formy">{fullname.emailid}</p>
         <p className ="formy">{fullname.phoneno}</p>
         <form  className ="formy" onSubmit = {getty} >
         <input onChange = {modify} className ="formy"  type = "text" placeholder = "Enter your first Name"
          name = "fname" value = {fullname.fname} />
          <input  onChange = {modify} className ="formy" type = "text" placeholder = "Enter your last Name"
          name = "lname"  value = {fullname.lname}  />
          <input onChange = {modify} className ="formy"  type = "text" placeholder = "Enter your email id"
          name = "emailid" value = {fullname.emailid} />
          <input onChange = {modify}  className ="formy" type = "number" placeholder = "Enter your phone number"
          name = "phoneno"    />
         <button  className ="formy"  type = "submit">Click Me!</button>
          </form>
    
        </div>
    );

};

export default App;