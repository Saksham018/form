import React,{useState} from 'react';
import "./login.css";


const Login = () => {

    const [data, setData] = useState({});
    //const [userId, serUserId] = useState(null);

    const handleChange = (e, key) => {
        if(key === 'file'){
            const file = e.target.files || [];
            console.log(file[0]);
        }
        setData({
          ...data,
          [key]: e.target.value
        }) 
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(data);
    }


    return (

        <div className="login" >
        <form className="login_form">
            <h1>Enter Employee Details</h1>
                <input 
                    type="Name" 
                    placeholder="Enter the Name" 
                    value={data['firstname']}
                    onChange={(e) => handleChange(e, 'firstname')} 
                />
                <input 
                    type="LName" 
                    placeholder="Enter the Last Name" 
                    value={data['lastname']}
                    onChange={(e) => handleChange(e, 'lastname')} 
                />
                <select id="dept" value={data['dept']} onChange={(e) => handleChange(e, 'dept')}>
                    <option value="Department" selected> Select Department </option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Admin">Admin</option>
                    <option value="Transport">Transport</option>
                </select><br></br>
                <input 
                    type="Number" 
                    placeholder="Enter Your Number" 
                    value={data['mobile']}
                    onChange={(e) => handleChange(e, 'mobile')} 
                />
                <label for="myfile">Upload Employee Image/Photo.:</label>
                <input 
                    type="file" 
                    id="myfile" 
                    name="myfile" 
                    value={data['file']}
                    onChange={(e) => handleChange(e, 'file')} 
                />
                <button type="submit" value="Submit" onClick={handleSubmit}>SAVE</button>
                </form>

        </div>

    )
}

export default Login;