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
var Main = require('../containers/main')

var {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TextInput,
    TouchableHighlight,
    NavigatorIOS,
    } = React


/* component statement */
class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            isLoading: false,
            error: false
        }
    }

    handleGetUserName(val){
        var email = val
        console.log("email:"+email)
        this.setState({
            email: email
        })
    }

    handleGetPassword(val){
        var password = val
        console.log("password:"+password)
        this.setState({
            password: password
        })
    }


    handleLogin(){
        this.props.navigator.push({
            title: '主页',
            component: Main
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.logo} source={require('image!logo')}></Image>
                    </View>
                    <View style={styles.inputRow}>
                        <Text>用户名:</Text><TextInput style={styles.input} placeholder="请输入..." onChangeText={this.handleGetUserName.bind(this)}/>
                    </View>
                    <View style={styles.inputRow}>
                        <Text>密   码:</Text><TextInput style={styles.input} placeholder="请输入..." password={true} onChangeText={this.handleGetPassword.bind(this)}/>
                    </View>
                    <View>
                        <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this.handleLogin.bind(this)}>
                            <Text style={{color:'#fff'}}>登录</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        )
    }

}


/* style statement */
var styles = StyleSheet.create({
    container:{
        marginTop:50,
        alignItems:'center',
    },
    logo:{
        width:200,
        height:150,
        resizeMode: Image.resizeMode.contain
    },
    inputRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        marginBottom:10,
    },
    input:{
        marginLeft:10,
        width:220,
        borderWidth:Util.pixel,
        height:35,
        paddingLeft:8,
        borderRadius:5,
        borderColor:'#ccc'
    },
    btn:{
        marginTop:10,
        width:80,
        height:35,
        backgroundColor:'#3BC1FF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 4,
    }
})


/* component register */
module.exports = Login

