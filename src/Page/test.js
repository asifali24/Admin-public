 constructor(props) {
    super(props);
    this.state = {
      
     recipeList :
      [{
        recipe: "Tacos",
        directions: "make tacos",
        ingredients: ["meat"]
      },
      {
        recipe: "pizza",
        directions: "bake",
        ingredients: ["dough"]
      }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }///
  
  handleChange(event) {
    this.setState({
     recipeList[0].recipe :event.target.value
    });
   }
  
  handleSubmit(){
      const newRecipe = this.state.recipelist[0].recipe
    setState({
      recipeList[0].recipe: newRecipe
      
    })
  }
  
  render(){
   const input = '';
    const ITEMS = this.state.recipeList.map(({recipe}) => <li>{recipe}</li>)
    return(
      <div>
        <EditList recipe = {this.state.recipeList[0].recipe}
          handleChange = {this.handleChange}
          onSubmit = {this.handleSubmit}/>
          <ul>                                                     
          {ITEMS}
          </ul>
        </div>
    )
  }
}

class EditList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
     
    return(
      <div>
        <input type='text'
          value = {input}
          onChange = {this.props.handleChange}
         />
        <button onClick={this.props.onSubmit}>Submit</button>
       </div>
     )
  }
}

ReactDOM.render(<RecipeBox />, document.getElementById('app'));