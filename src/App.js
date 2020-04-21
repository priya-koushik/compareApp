import React, {Component} from 'react';
import './App.css';
import {Box, Image, Text, CheckBox, Button} from 'grommet';

class App extends Component {
    state = {
        products: [],
        setShow: false,
        selectedItems : [],
        storeItems: [],
    }
    setShow = (obj, state) => {
        this.setState({setShow : state,
            selectedItems: obj})
    }
    store = (obj) =>{
        this.setState({storeItems : obj})
    }
      componentDidMount() {
        fetch('https://www.mocky.io/v2/5e86ec5531000011d8814754')
        .then(res => res.json())
        .then((data) => {
          this.setState({ products: data })
        })
        .catch(console.log)
      }
render() {
    const products = this.state.products;
    const images = products.products !== undefined ? products.products.compareSummary.images : '';
    const titles = products.products !== undefined ? products.products.compareSummary.titles : '';
    const productPricingSummary = products.products !== undefined ? products.products.compareSummary.productPricingSummary : '';
    const productFeatures = products.products !== undefined ? products.products.featuresList : '';
    const productObj = {
        TVSE8FMZ9AQMEGC6: {
            image : images['TVSE8FMZ9AQMEGC6'],
            title : titles['TVSE8FMZ9AQMEGC6'],
            productPricingSummary: productPricingSummary['TVSE8FMZ9AQMEGC6'],
            main_features:{
                title: productFeatures[0]?.title,
                subFeatures : {
                    name : productFeatures[0]?.features[0].featureName,
                    value: productFeatures[0]?.features[0].values['TVSE8FMZ9AQMEGC6']
                },
                Screen_Type : productFeatures[0]?.features[1].values['TVSE8FMZ9AQMEGC6'],
                x : productFeatures[0]?.features[2].values['TVSE8FMZ9AQMEGC6']

            }
        },
        TVSF2WYUE4PWNJKM : {
            image : images['TVSF2WYUE4PWNJKM'],
            title : titles['TVSF2WYUE4PWNJKM'],
            productPricingSummary: productPricingSummary['TVSF2WYUE4PWNJKM'],
            features:{
                title: productFeatures[0]?.title,
                name: productFeatures[0]?.features[0].featureName    
                    }            
        },
        TVSF2WYXTKAR7RAF : {
            image : images['TVSF2WYXTKAR7RAF'],
            title : titles['TVSF2WYXTKAR7RAF'],
            productPricingSummary: productPricingSummary['TVSF2WYXTKAR7RAF'],   
            features:{
                title: productFeatures[0]?.title,
                name: productFeatures[0]?.features[0].featureName    
                    }
        },
        TVSF3J7HUJF5XUBT : {
            image : images['TVSF3J7HUJF5XUBT'],
            title : titles['TVSF3J7HUJF5XUBT'],
            productPricingSummary: productPricingSummary['TVSF3J7HUJF5XUBT'],     
            features:{
                title: productFeatures[0]?.title,
                name: productFeatures[0]?.features[0].featureName    
                    }
        }
    };

  return (
      <div>
          <div>{console.log(productObj)}</div>
      {this.state.setShow === false &&
      (<div>{
             [productObj].map(product =>
            Object.values(product).map(proObj => (
            <Box height="medium" width="medium">
              <Image
                fit="cover"
                src={proObj.image}
              />
            <Text>{proObj.title ? proObj.title.title : '' }</Text>
            <Text>{proObj.productPricingSummary ?`Price ${proObj.productPricingSummary.price}` : '' }</Text>
            <Text>{proObj.productPricingSummary ?`Final Price ${proObj.productPricingSummary.finalPrice}` : '' }</Text>
            <CheckBox
                label="Add to Compare"
                onChange={() => this.setShow(proObj, true)}
            />
            <br/>
            <br/>
            </Box>
            ))
          )}
</div>)}
{this.state.setShow && (

  <div>
      {
   (
       <Box height="medium" width="medium">
      <Box height="medium" width="medium" direction="row">
          <Box pad="medium">
          <Box height="large" width="large">
          <Image
              fit="cover"
              src={this.state.selectedItems.image}
          />
           </Box>
          <Text>{this.state.selectedItems.title ? this.state.selectedItems.title.title : ''}</Text>
          <Text>{this.state.selectedItems.productPricingSummary ? `Price ${this.state.selectedItems.productPricingSummary.price}` : ''}</Text>
          <Text>{this.state.selectedItems.productPricingSummary ? `Final Price ${this.state.selectedItems.productPricingSummary.finalPrice}` : ''}</Text>
          </Box>
          <Box pad="medium">
              <Box height="large" width="large">
              <Image
                  fit="cover"
                  src={this.state.storeItems.image}
              />
              </Box>
              <Text>{this.state.storeItems.title ? this.state.storeItems.title.title : ''}</Text>
              <Text>{this.state.storeItems.productPricingSummary ? `Price ${this.state.storeItems.productPricingSummary.price}` : ''}</Text>
              <Text>{this.state.storeItems.productPricingSummary ? `Final Price ${this.state.storeItems.productPricingSummary.finalPrice}` : ''}</Text>
          </Box>
      </Box>
       <Button label='Back' onClick={() =>{this.setShow(null,false);
     this.store(this.state.selectedItems)}}/>
     <Button label='Cancel Compare' onClick={() => this.store([])}/>
       </Box>
  )
  }
  </div>
)}
  </div>

  );
}


}
export default App;
