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
    let generator = new PasswordGenerator(length)
    for(let i=0;i<count;i++){
      let password = generator.generate()
      generated.push(password)
    }
    this.setState({passwords:generated})
  }

  clear=()=>{
    this.setState({length:0,passwords:[],count:0})
  }

  changeHandle=(e)=>{
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
