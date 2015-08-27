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
var Login = require('../components/login')

var {
    Component,
    StyleSheet,
    NavigatorIOS,
    } = React


/* component statement */
class App extends Component {

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: '登录',
                    component: Login,
                }}/>
        )
    }
}


/* style statement */
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
})


/* component register */
module.exports = App

