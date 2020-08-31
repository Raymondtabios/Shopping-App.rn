import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }

    return (

    <View style={styles.product}> 
       <View style ={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForground>
        <View>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.image}} />
        </View>
    <View style={styles.details}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.price}>${props.price.toFixed(2)}</Text>
    </View>  
        <View style={styles.action}>
            <Button 
            color={Colors.blue} 
            title='View Details' 
            onPress={props.onViewDetail} 
            />
            <Button 
            color={Colors.blue} 
            title='To Cart' 
            onPress={props.onAddToCart} 
            />
        </View>
        </View>
        </TouchableCmp> 
        </View>
    </View>
   
    );
};

const styles = StyleSheet.create ({

product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    
},
image:{
    width: '100%',
    height: '100%'
},
title:{
    fontSize: 20,
    marginVertical: 1,
    fontFamily: 'open-sans-bold'

},
price:{
    fontSize: 16,
    color: Colors.maroon,
    fontFamily: 'open-sans-bold'
},
action:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:'25%',
    paddingHorizontal: 20,
},
details:{
    alignItems: 'center',
    height: '15%',
    padding: 10,
    fontFamily: 'open-sans'
},
imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
},
touchable: {
    borderRadius: 10,
    overflow: 'hidden'
}

});

export default ProductItem;