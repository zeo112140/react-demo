/**
 * function: app-index-page
 * author: zeo
 * mail: 7453027@qq.com
 * create-date: 2015-08-21
 */

 /* mode declaration */
'use strict'

 /* reference&variable declaration */
var React = require('react-native')
var App = require('./app/containers/app')

var {
    AppRegistry,
    Component,
    StyleSheet,
    } = React


/* component statement */
class demo extends Component{
    render() {
        return (
            <App/>
        )
    }
}


/* component register */
AppRegistry.registerComponent('demo', () => demo)

