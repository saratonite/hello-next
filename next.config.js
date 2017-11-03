module.exports = {
	exportPathMap: function() {
		return {
			'/': { page:'/'}
		}
	},
	webpack:(config, {buildId, dev}) => {
	
	  return config
	
	}

}
