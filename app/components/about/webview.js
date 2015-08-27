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

var {
    WebView,
    ScrollView,
    Text,
    View,
    Component,
    } = React


/* component statement */
class webview extends Component{

  render(){
      return(
          <View style={{flex:1}}>
              <WebView url={this.props.url}/>
          </View>
      )
  }

}


/* component register */
module.exports = webview;

