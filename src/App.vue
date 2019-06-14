<template>
  <div id="app">
    <dxheader></dxheader>
    <dxindex></dxindex>
    <dxfooter></dxfooter>
  </div>
</template>

<script>
	import dxHeader from './components/dxHeader'
	import dxFooter from './components/dxFooter'
	import dxIndex from './components/dxIndex'
export default{
		name:'App',
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		components:{
  	"dxheader":dxHeader,
  	"dxfooter":dxFooter,
  	"dxindex":dxIndex
  }
	}
</script>

<style>
   @import'../static/css/dxpc-home.css';
</style>
