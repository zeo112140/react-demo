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
var Util = require('../../util/util')
var ActionSheetIOS = require('ActionSheetIOS')

var {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableHighlight,
    LinkingIOS,
    AlertIOS,
    Component,
    } = React


/* component statement */
class Address extends Component{

    render(){
        var view = []
        var items = this.props.data.status? this.props.data.data: []
        var colors = ['#E20079', '#FFD602', '#25BFFE', '#F90000', '#04E246', '#04E246', '#00AFC9']
        var color = {
            backgroundColor: colors[parseInt(Math.random()*7)]
        }
        for(var i in items){
            view.push(
                <View style={styles.row}>
                    <View style={[styles.text, color]}>
                        <Text style={{fontSize:25, color:'#fff', fontWeight:'bold'}}>{items[i].username.substr(0, 1) || '未'}</Text>
                    </View>
                    <View style={styles.part}>
                        <Text>
                            {items[i].username}
                        </Text>
                        <Text style={styles.unColor}>
                            {(items[i].partment||'') + '部－' + (items[i].tag||'') + '人员'}
                        </Text>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableHighlight underlayColor="#fff" onPress={this.showActionSheet.bind(this, items[i].tel, items[i].email, items[i].username)}>
                            <Text style={styles.link}>
                                {items[i].tel}
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#fff" onPress={this.showActionSheet.bind(this, items[i].tel, items[i].email, items[i].username)}>
                            <Text style={styles.link}>
                                {items[i].email}
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        }
        return (
            <ScrollView>
                {view}
            </ScrollView>
        )
    }

    showActionSheet(tel, email, name) {
        var options = []
        options.push('拨打电话给：' + name)
        options.push('发送短信给：' + name)
        options.push('发送邮件给：' + name)
        options.push('取消')

        var events = [];
        events.push(function(){
            LinkingIOS.openURL('tel://' + tel)
        })
        events.push(function(){
            LinkingIOS.openURL('sms://' + tel)
        })
        events.push(function(){
            LinkingIOS.openURL('mailto://' + email)
        })


        ActionSheetIOS.showActionSheetWithOptions({
                options: options,
                cancelButtonIndex: options.length - 1 ,
            },
            function(index){
                events[index] && events[index]()
            }
        )
    }

}


/* style statement */
var styles = StyleSheet.create({
    row:{
        height:80,
        borderBottomWidth: Util.pixel,
        borderBottomColor:'#ccc',
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        width:50,
        height:50,
        borderRadius:4,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#E30082',
    },
    part:{
        marginLeft:5,
        flex:1,
    },
    link:{
        color:'#1BB7FF',
        marginTop:2,
    },
    unColor:{
        color: '#575656',
        marginTop:8,
        fontSize:12,
    }
})


/* component register */
module.exports = Address


