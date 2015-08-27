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
var Util = require('../util/util')
var ItemBlock = require('../components/home/itemBlock')

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} = React


/* component statement */
var Home = React.createClass({

  getInitialState: function(){
    var width = Math.floor(((Util.size.width - 20) - 50) / 4);
    var items = [
      {
        title: '研发',
        partment: '框架研发',
        color: '#126AFF',
      },
      {
        title: '研发',
        partment: 'BU研发',
        color: '#FFD600',
      },
      {
        title: '产品',
        partment: '公共产品',
        color: '#F80728',
      },
      {
        title: '产品',
        partment: 'BU产品',
        color: '#05C147',
      },
      {
        title: '产品',
        partment: '启明星',
        color: '#FF4EB9',
      },
      {
        title: '项目',
        partment: '项目管理',
        color: '#EE810D',
      }
    ];

    return {
      items: items,
      width: width
    };
  },

  render: function(){
    var Items1 = [];
    var Items2 = [];
    var items = this.state.items;

    for(var i = 0; i < 4; i++){
      Items1.push(
        <ItemBlock
          title={items[i].title}
          partment={items[i].partment}
          width={this.state.width}
          color={items[i].color}
          nav={this.props.navigator}
          />
      );
    }

    for(var i = 4; i < items.length; i++){
      Items2.push(
        <ItemBlock
          title={items[i].title}
          partment={items[i].partment}
          width={this.state.width}
          color={items[i].color}
          nav={this.props.navigator}
          />
      );
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemRow}>
          {Items1}
        </View>
        <View style={styles.itemRow}>
          {Items2}
        </View>

      </ScrollView>
    );
  }
  
});


/* style statement */
var styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginBottom:120,
    },
    itemRow:{
        flexDirection:'row',
        marginBottom:20,
    }
});


/* component register */
module.exports = Home;



