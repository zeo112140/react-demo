/**
 * function: app-component
 * author: zeo
 * mail: 7453027@qq.com
 * create-date: 2015-08-21
 */

 /* mode declaration */
'use strict'

 /* reference&variable declaration */
var React = require('react-native')
var webview = require('./about/webview')

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Component,
} = React


/* component statement */
class About extends Component{

    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <Image style={styles.avatar} source={require('image!me_1')}></Image>
                    <Text style={{fontSize:14, marginTop:10, color:'#ABABAB'}}>Author: vczero</Text>
                    <Text style={{fontSize:14, marginBottom:20, color:'#ABABAB'}}>Version: v0.0.1</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={this._openWebView.bind(this, 'https://github.com/vczero/React-Native-App')}>
                            <Image style={styles.img} source={require('image!github')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._openWebView.bind(this, 'http://weibo.com/vczero')}>
                            <Image style={[styles.img, {width:25,height:25}]} source={require('image!weibo')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }

    _openWebView(url){
      this.props.navigator.push({
          title:'项目地址',
          component: webview,
          passProps:{
              url: url
          }
      })
    }

}


/* style statement */
var styles = StyleSheet.create({
    container:{
        flex:1,
    },
    wrapper:{
        alignItems:'center',
        marginTop:50,
    },
    avatar:{
        width:90,
        height:90,
        borderRadius:45,
    },
    img:{
        width:20,
        height:20,
        marginRight:5,
    }
})


/* component register */
module.exports = About


