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
var Util = require('../util/util')

var {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    Component,
    } = React


/* component statement */
class Manager extends Component{

    render(){
        var colors = ['#F4000B', '#17B4FF', '#FFD900', '#F00000'];
        var tags = ['U', 'A', 'D', 'M'];
        return (
            <ScrollView style={styles.container}>
                <View style={{marginTop:30}}>
                    <TouchableOpacity onPress={this._clear.bind(this)}>
                        <View style={[styles.item, {flexDirection:'row'}]}>
                            <Text style={[styles.tag, {color: colors[0]}]}>Q</Text>
                            <Text style={[styles.font,{flex:1}]}>退出登录</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    _loadPage(component, title){
        this.props.navigator.push({
            title: title,
            component: component
        })
    }

    _clear(){
        this.props.navigator.pop()
        AsyncStorage.clear()
    }

}


/* style statement */
var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5',
    },
    item:{
        height:40,
        justifyContent: 'center',
        borderTopWidth: Util.pixel,
        borderTopColor: '#ddd',
        backgroundColor:'#fff',
        alignItems:'center',
    },
    font:{
        fontSize:15,
        marginLeft:5,
        marginRight:10,
    },
    wrapper:{
        marginTop:30,
    },
    tag:{
        marginLeft:10,
        fontSize:16,
        fontWeight:'bold'
    }
})


/* component register */
module.exports = Manager

