import React,{Component} from 'react'
import PasswordDisplay from '../PasswordDisplay/PasswordDisplay';
import PasswordGenerator from '../../PasswordGenerator';

class Body extends Component{
  state={
    length: 0,
    passwords: [],
    count: 0,
  }

  generate=(count,length)=>{
    let generated = [...this.state.passwords]
    for(let i=0;i<count;i++){
      let password = new PasswordGenerator(length).generate()
      generated.push(password)
    }
    this.setState({passwords:generated})
    console.log(this.state)
  }

  clear=()=>{
    this.setState({length:0,passwords:[],count:0})
  }

  changeHandle=(e)=>{
    console.log(e.target.value)
    this.setState({[e.target.name]:e.target.value})
  }

  render(){
    return (
      <div id="mainBody">
        <PasswordDisplay passwords={this.state.passwords}/>

        <div className="box" id="generateBox">
          <label> <h2>Password length:
            <input name="length" type="number" value={this.state.length} onChange = {(e)=>this.changeHandle(e)}/></h2>
          </label><br/>
          
          {/*<button onClick={()=>this.generate(1,this.state.length)}>Generate Password</button><br></br>*/}
          <label>
            <h2>Number of passwords:  <input name="count" type="number" value = {this.state.count} onChange = {(e)=>this.changeHandle(e)}/></h2>
          </label><br/>
          
          <div className="buttonGroup">
            <button onClick={()=>this.generate(this.state.count,this.state.length)}>Generate</button>

            <button onClick={()=>this.clear()}>Clear</button>
          </div>
          
        </div>
      </div>
    )

  }
  
}

export default Body
