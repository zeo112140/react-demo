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
var Message = require('../components/message')
var Manager = require('../components/manager')
var Home = require('../components/home')
var About = require('../components/about')

var {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    NavigatorIOS,
    } = React


/* component statement */
var Main = React.createClass({
    statics: {
        title: '<TabBarIOS>',
        description: 'Tab-based navigation.',
    },

    displayName: 'Main',

    getInitialState: function() {
        return {
            selectedTab: 'message',
            notifCount: 0,
            presses: 0,
        }
    },

    _renderContent0: function(component) {
        return (
            <Home/>
        )
    },

    _renderContent: function(component) {
        return (
            <Message/>
        )
    },

    _renderContent1: function(component) {
        return (
            <Manager/>
        )
    },

    _renderContent2: function(component) {
        return (
            <About/>
        )
    },

    render: function() {
        return (
            <TabBarIOS tintColor="white" barTintColor="darkslateblue">
                <TabBarIOS.Item
                    title="主页"
                    icon={require('image!phone_s')}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'home',
                        })
                    }}>
                    {this._renderContent0(Home)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="公告"
                    icon={require('image!gonggao')}
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === 'message'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'message',
                            notifCount: this.state.notifCount + 1,
                        })
                    }}>
                    {this._renderContent(Message)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="管理"
                    icon={require('image!manager')}
                    selected={this.state.selectedTab === 'manager'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'manager',
                            presses: this.state.presses + 1
                        })
                    }}>
                    {this._renderContent1(Manager)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="关于"
                    icon={require('image!about')}
                    selected={this.state.selectedTab === 'about'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'about',
                            presses: this.state.presses + 1
                        })
                    }}>
                    {this._renderContent2(About)}
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    },

})


/* style statement */
var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
})


/* component register */
module.exports = Main

