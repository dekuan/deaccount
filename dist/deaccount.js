
/**
 *	defines VDATA
 */
var window	= window || {};
var DEACCOUNT	= window.DEACCOUNT || {};


//
//	constants
//
DEACCOUNT.CONST	=
{
	//
	//	default values
	//
	DEFAULT_PAGE		: 1,		//	page number
	DEFAULT_PAGE_SIZE	: 10,		//	page size

	//	...
	USER_STATUS_UNKNOWN	: -1,		//	user status unknown
	USER_STATUS_OKAY	: 1,		//	user status okay
	USER_STATUS_LOCKED	: 2,		//	user status locked


	//
	//	u_gender
	//
	USER_GENDER_UNKNOWN	: 0,		//	未知
	USER_GENDER_MALE	: 1,		//	男性
	USER_GENDER_FEMALE	: 2,		//	女性


	//
	//	OAuth type
	//
	OAUTH_TYPE_UNKNOWN	: 0,
	OAUTH_TYPE_WECHAT	: 1,
	OAUTH_TYPE_QQ		: 2,


	//
	//	OAuth status
	//
	OAUTH_STATUS_UNKNOWN	: 0,
	OAUTH_STATUS_ENABLED	: 1,
	OAUTH_STATUS_DISABLED	: 2,


	//
	//	Redirect
	//
	REDIRECT_UNKNOWN	: 0,
	REDIRECT_INFO		: 1,
	REDIRECT_LOGIN_SUCCESS	: 2,
	REDIRECT_BIND_MOBILE	: 3,
	REDIRECT_LOGIN_FAILED	: 4,

	//
	//	...
	//
	END_OF_CONST		: null
};


//
//	Library
//
DEACCOUNT.LIB	=
{
	/**
	 *	@return {boolean}
	 */
	isValidUserStatus : function( nVal )
	{
		return ( this._isNumeric( nVal ) &&
			(
				DEACCOUNT.CONST.USER_STATUS_OKAY === nVal ||
				DEACCOUNT.CONST.USER_STATUS_LOCKED === nVal
			) );
	},

	/**
	 *	@return {boolean}
	 */
	isValidUserGender : function( nVal )
	{
		return ( this._isNumeric( nVal ) &&
			(
				DEACCOUNT.CONST.USER_GENDER_UNKNOWN === nVal ||
				DEACCOUNT.CONST.USER_GENDER_MALE === nVal ||
				DEACCOUNT.CONST.USER_GENDER_FEMALE === nVal
			) );
	},

	/**
	 *	@return {boolean}
	 */
	isValidOAuthType : function( $nVal )
	{
		return ( this._isNumeric( $nVal ) &&
			(
				DEACCOUNT.CONST.OAUTH_TYPE_UNKNOWN === $nVal ||
				DEACCOUNT.CONST.OAUTH_TYPE_WECHAT === $nVal ||
				DEACCOUNT.CONST.OAUTH_TYPE_QQ === $nVal
			) );
	},

	/**
	 *	@return {boolean}
	 */
	isValidOAuthStatus : function( $nVal )
	{
		return ( this._isNumeric( $nVal ) &&
			(
				DEACCOUNT.CONST.OAUTH_STATUS_UNKNOWN === $nVal ||
				DEACCOUNT.CONST.OAUTH_STATUS_ENABLED === $nVal ||
				DEACCOUNT.CONST.OAUTH_STATUS_DISABLED === $nVal
			) );
	},

	/**
	 *	@return {boolean}
	 */
	isValidRedirect : function( $nVal )
	{
		return ( this._isNumeric( $nVal ) &&
			(
				DEACCOUNT.CONST.REDIRECT_UNKNOWN === $nVal ||
				DEACCOUNT.CONST.REDIRECT_INFO === $nVal ||
				DEACCOUNT.CONST.REDIRECT_LOGIN_SUCCESS === $nVal ||
				DEACCOUNT.CONST.REDIRECT_BIND_MOBILE === $nVal ||
				DEACCOUNT.CONST.REDIRECT_LOGIN_FAILED === $nVal
			) );
	},


	/**
	 *	@return {boolean}
	 */
	_isNumeric : function( vValue )
	{
		//	copied from jQuery
		return "array" !== typeof( vValue ) && ( vValue - parseFloat( vValue ) + 1 ) >= 0;
	}

};



//
//      exports for node.js
//
if ( "object" === typeof module && "object" === typeof module.exports )
{
	module.exports =
	{
		CONST	: DEACCOUNT.CONST,
		LIB	: DEACCOUNT.LIB
	}
}